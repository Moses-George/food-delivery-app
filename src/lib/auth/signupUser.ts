import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        toast.update(id, { render: "Your account has been successfully created", type: "success", isLoading: false, autoClose: 4000 });
        console.log(data)

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }

        return data;

    } catch (err: any) {
        toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 4000 });
        console.error(err);
    }
}