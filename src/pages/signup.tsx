import React, { useRef, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createUser } from "@src/lib/auth/signupUser";
import { signInUser } from "@src/lib/auth/signInUser";


const Signup = () => {

    const usernameRef = useRef<null | HTMLInputElement>(null);
    const emailRef = useRef<null | HTMLInputElement>(null);
    const passwordRef = useRef<null | HTMLInputElement>(null);
    const { data: session } = useSession();
    console.log(session);

    const SignupUser = async (event: FormEvent) => {
        event.preventDefault();

        const username = usernameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        try {
            const response = await createUser(username, email, password);
            if (response.ok) {
                await signInUser(email, password);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

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
        <div className="w-full h-screen pt-8">
            <div className="bg-white w-[30rem] sm:w-[90%] h-[95%] sm:h-[96%] mx-auto p-8 shadow-lg rounded-md">
                <h1 className="text-3xl text-dark-gray">Signup</h1>
                <form className="pt-10 w flex flex-col items-center justify-center" onSubmit={SignupUser} >
                    <div className="group">
                        <input type="text" className=" border-dark-peach" required autoComplete="off" ref={usernameRef} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-dark-peach">username</label>
                    </div>

                    <div className="group">
                        <input type="email" className="border-dark-peach" required autoComplete="off" ref={emailRef} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-md text-dark-peach">Email</label>
                    </div>
                    <div className="group">
                        <input type="password" className=" border-dark-peach" required autoComplete="off" ref={passwordRef} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-md text-dark-peach">password</label>
                    </div>
                    <button type="submit" className="bg-grayish-white border-none text-dark-gray w-4/5 sm:w-full shadow-md">Signup</button>
                </form>
                <div className="flex items-center pt-4 space-x-3">
                    <div className="bg-white h-1 w-full"></div>
                    <span className="text-medium-gray font-semibold text-md">OR</span>
                    <div className="bg-white h-1 w-full"></div>
                </div>
                <button className="flex items-center justify-center space-x-3 bg-medium-peach py-2 px-3 w-4/5 sm:w-full mx-auto my-4 rounded-md shadow-md hover:opacity-60">
                    <FaGoogle className="text-white text-xl" />
                    <span className="text-white font-semibold">Signup with Google</span>
                </button>
                <p className="text-medium-gray text-md">Already a member? <Link href="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;