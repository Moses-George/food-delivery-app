import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import MyUser from '@src/models/user';
import dbConnect from "@src/lib/mongodb/dbConnect";

interface IUser extends User {
    userId: string;
    name: string;
    email: string;
    // image?: string;
    role: string;
}

// dbConnect();


export default NextAuth({
    // Enable JSON Web Tokens since we will not store sessions in our DB
    session: {
        strategy: 'jwt'
    },
    // Here we add our login providers - this is where you could add Google or Github SSO as well
    providers: [
        CredentialsProvider({
            name: "credentials",
            // The credentials object is what's used to generate Next Auths default login page - We will not use it however.
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            // Authorize callback is ran upon calling the signin function
            async authorize(credentials, req) {
                  await dbConnect();
                // if (db)
                console.log(credentials);


                    try {
                        // Try to find the user and also return the password field
                        const user = await MyUser.findOne({ email: credentials?.email }).select('+password');

                        if (!user) { throw new Error('No user with a matching email was found.') }

                        // Use the matchPassword method we defined in our user.js Model file to authenticate
                        const pwValid = await user.matchPassword(credentials?.password);

                        if (!pwValid) { throw new Error("Your password is invalid") }

                        return user;

                    } catch (err: any) {
                        console.error(err.message);
                    }

            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // url: "localhost:300",
    // All of this is just to add user information to be accessible for our app in the token/session
    callbacks: {
        // We can pass in additional information from the user document MongoDB returns
        // This could be avatars, role, display name, etc...
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
            // return { ...token, ...user };
        },
        // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
        session: async ({ session, token }) => {
            if (token) {
                // const userToken = token.user;
                session.user = token.user as IUser;
            }
            return session;
        }
    },
    pages: {
        // Here you can define your own custom pages for login, recover password, etc.
        signIn: '/login',
    },
})