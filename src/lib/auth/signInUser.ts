import { signIn } from "next-auth/react";


export const signInUser = async (email: string | undefined, password: string | undefined) => {
    await signIn('credentials', {
        redirect: false,
        email: email,
        password: password
    });
}