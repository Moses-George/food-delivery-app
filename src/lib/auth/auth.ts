import { signIn } from "next-auth/react";
import { toast } from "react-toastify";


export const createUser = async (username: string, email: string, password: string) => {

    const id = toast.loading("Creating user account...");

    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'content-type': 'application/json',
            },
        })

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }

        toast.update(id, { render: data.message, type: "success", isLoading: false, autoClose: 4000 });

        return data;

    } catch (err: any) {
        toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 4000 });
        console.error(err);
    }
}



export const signInUser = async (email: string, password: string) => {

    const id = toast.loading("Hold on while we log you in...");

    try {
        const res = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password
        });

        if (!res?.ok) {
            throw new Error(res?.error);
        } else {
            toast.update(id, { render: "You're are now logged in!", type: "success", isLoading: false, autoClose: 3000, closeButton: true });
        }
    } catch (err: any) {
        console.log(err.message);
        toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 4000 });
    }
}