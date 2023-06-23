import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


const Signup = () => {

    return (
        <div className="w-full h-screen pt-8">
            <div className="bg-dark-peach w-[30rem] sm:w-[90%] h-[95%] sm:h-[96%] mx-auto p-8 shadow-lg rounded-md">
                <h1 className="text-3xl text-white">Signup</h1>
                <form className="pt-10 w flex flex-col items-center justify-center">
                        <div className="group">
                            <input type="text" className="bg-dark-peach border-white" required autoComplete="off" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="text-white">username</label>
                        </div>

                        <div className="group">
                            <input type="email"  className="bg-dark-peach border-white" required autoComplete="off" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="text-md text-white valid:text-white">Email</label>
                        </div>
                        <div className="group">
                            <input type="password"  className="bg-dark-peach border-white" required autoComplete="off" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="text-md text-white">password</label>
                        </div>
                        <button type="submit" className="bg-grayish-white border-none text-dark-gray w-4/5 sm:w-full shadow-md">Signup</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-3">
                        <div className="bg-white h-1 w-full"></div>
                        <span className="text-white font-semibold text-md">OR</span>
                        <div className="bg-white h-1 w-full"></div>
                    </div>
                    <button className="flex items-center justify-center space-x-3 bg-medium-peach py-2 px-3 w-4/5 sm:w-full mx-auto my-4 rounded-md shadow-md hover:bg-white hover:text-dark-peach">
                        <FaGoogle className="text-white text-2xl text-[gold]" /> 
                        <span className="text-white font-semibold">Signup with Google</span>
                    </button>
                    <p className="text-grayish-white text-md">Already a member? <Link href="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;