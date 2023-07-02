import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const createUser = async (username: string | undefined, email: string | undefined, password: string | undefined) => {
    const response = await toast.promise(fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
            'content-type': 'application/json',
        },
    }), {
        pending: "Your account is being created...",
        success: "Your account has been successfully created!",
        error: "An error ocuurred while creating account"
    }, {position: "top-right", autoClose: 5000, theme: "light", draggable: true, closeOnClick: true, pauseOnHover: true}) ;

    const data = await response.json();
    console.log(data)

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
}