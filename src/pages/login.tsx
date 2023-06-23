import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    return (
        <div className="w-full h-screen pt-10">
        <div className="bg-dark-peach w-[30rem] sm:w-[90%] h-[90%] sm:h-[95%] mx-auto p-8 shadow-lg rounded-md">
            <h1 className="text-3xl text-white">Login</h1>
            <form className="pt-10 w flex flex-col items-center justify-center">
                    <div className="group">
                        <input type="email"  className="bg-dark-peach border-white" required autoComplete="off" autoSave="off" />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-md text-white valid:text-white">Email</label>
                    </div>
                    <div className="group">
                        <input type="password"  className="bg-dark-peach border-white" required autoComplete="off" autoSave="off" />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="text-md text-white">password</label>
                    </div>
                    <button type="submit" className="bg-grayish-white border-none text-dark-gray w-4/5 sm:w-full shadow-md">Login</button>
                </form>
                <div className="flex items-center py-8 space-x-3">
                    <div className="bg-white h-1 w-full"></div>
                    <span className="text-white font-semibold text-md">OR</span>
                    <div className="bg-white h-1 w-full"></div>
                </div>
                <button className="flex items-center justify-center space-x-3 bg-medium-peach py-2 px-3 w-4/5 sm:w-full mx-auto mb-8 rounded-md shadow-md hover:bg-white hover:text-dark-peach">
                        <FaGoogle className="text-white text-2xl text-[gold]" /> 
                        <span className="text-white font-semibold">continue with Google</span>
                    </button>
                <p className="text-grayish-white text-md">Dont't have an account? <Link href="/signup">Signup</Link></p>
        </div>
    </div> 
    )
}

export default Login;