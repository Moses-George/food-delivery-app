import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "@src/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {

    return (
        <footer className="w-full h-max  py-3 md:mt-16 bg-[#f7faff]">
            <div className="container flex sm:flex-col items-center justify-between sm:gap-y-5">
                <Image src={logo} alt="" className="w-32 h-24 sm:w-28 sm:h-20" />
                <div className="flex gap-x-4 sm:-mt-6">
                    <Link href="" className="text-md">Menu</Link>
                    <Link href="" className="text-md">Chat</Link>
                    <Link href="/contact" className="text-md">Contact us</Link>
                </div>
                <div className="flex gap-x-4 sm:gap-x-10">
                    <FaWhatsapp style={{ color: "hsl(233, 26%, 24%)", fontSize: "25px" }} />
                    <FaLinkedin style={{ color: "hsl(233, 26%, 24%)", fontSize: "25px" }} />
                    <FaTwitter style={{ color: "hsl(233, 26%, 24%)", fontSize: "25px" }} />
                    <FaGithub style={{ color: "hsl(233, 26%, 24%)", fontSize: "25px" }} />
                </div>
            </div>
            <p className="text-medium-gray text-center mt-1 mb-3">© {new Date().getFullYear()} Moses George</p>
        </footer> 
    )
}

export default Footer;