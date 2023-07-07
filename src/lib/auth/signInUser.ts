import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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