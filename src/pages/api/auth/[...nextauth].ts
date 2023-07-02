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
            authorize: async (credentials) => {
                await dbConnect();

                // Try to find the user and also return the password field
                const user = await MyUser.findOne({ email: credentials?.email }).select('+password');

                if (!user) { throw new Error('No user with a matching email was found.') }

                // Use the comparePassword method we defined in our user.js Model file to authenticate
                const pwValid = await user.comparePassword(credentials?.password);

                if (!pwValid) { throw new Error("Your password is invalid") }

                return user;
            }


        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // All of this is just to add user information to be accessible for our app in the token/session
    callbacks: {
        // We can pass in additional information from the user document MongoDB returns
        // This could be avatars, role, display name, etc...
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
                console.log(user);
            }
            return token
            // return { ...token, ...user };
        },
        // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
        session: async ({ session, token }) => {
            if (token) {
                session.user = token.user as IUser;
                console.log(session);
            }
            return session;
        }
    },
    pages: {
        // Here you can define your own custom pages for login, recover password, etc.
        signIn: 'auth/login',
    },
})