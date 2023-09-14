import useForm from "@src/hooks/useForm";
import { signInUser } from "@src/lib/auth/auth";
import { getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { credentials, handleChange } = useForm();
    const { data: session } = useSession();
    console.log(session);


    const LoginUser = async (event: FormEvent) => {
        event.preventDefault();

        const { email, password } = credentials;

        try {
             await signInUser(email, password);
        } catch (err: any) {
            console.error(err.message);
        }
    }

    // check if logged in and redirect to home page if so
    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.push('/');
            } else {
                setIsLoading(false);
            }
        });
    }, [router, session]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-full h-screen pt-10">
            <div className="bg-white w-[30rem] sm:w-[90%] h-[90%] sm:h-[95%] mx-auto p-8 shadow-lg rounded-md">
                <h1 className="text-3xl text-dark-gray">Login</h1>
                <form className="pt-10 w flex flex-col items-center justify-center" onSubmit={LoginUser} >
                    <div className="group">
                        <input type="email"
                            name="email"
                            className="border-dark-peach"
                            required
                            autoComplete="off"
                            autoSave="off"
                            onChange={handleChange}
                            value={credentials.email} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-md text-dark-peach">Email</label>
                    </div>
                    <div className="group">
                        <input type="password"
                            name="password"
                            className="border-dark-peach"
                            required
                            autoComplete="off"
                            autoSave="off"
                            onChange={handleChange}
                            value={credentials.password} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-md text-dark-peach">password</label>
                    </div>
                    <button type="submit" className="bg-grayish-white border-none text-dark-gray w-4/5 sm:w-full shadow-md">Login</button>
                </form>
                <div className="flex items-center py-8 space-x-3">
                    <div className="bg-light-gray h-1 w-full"></div>
                    <span className="text-medium-gray font-semibold text-md">OR</span>
                    <div className="bg-light-gray h-1 w-full"></div>
                </div>
                <button className="flex items-center justify-center space-x-3 bg-medium-peach py-2 px-3 w-4/5 sm:w-full mx-auto mb-8 rounded-md shadow-md hover:opacity-60">
                    <FaGoogle className="text-white text-2xl text-[gold]" />
                    <span className="text-white font-semibold">continue with Google</span>
                </button>
                <p className="text-medium-gray text-md">Dont't have an account? <Link href="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login;