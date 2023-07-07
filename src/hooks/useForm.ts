import { ChangeEvent, useState } from "react";


const useForm = () => {

    const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setCredentials(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        });
    }

    return { credentials, handleChange };
}

export default useForm;