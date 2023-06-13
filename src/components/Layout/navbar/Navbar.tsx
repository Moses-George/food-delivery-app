import React, { useState } from "react";
import { MdAccountBox } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "@src/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

    return (
        <>
            {sidebarIsVisible && <Sidebar closeSidebar={()=> setSidebarIsVisible(false)} />}
            <header className="bg-nav-bg backdrop-blur-md mx-auto my-0 fixed  left-0 top-0 w-full transition ease-out delay-100 duration-500">
                <nav className=" container grid grid-cols-3 items-center py-0 sm:py-4 px-5">
                    <div className="">
                        <Image src={logo} alt="logo" className="w-20 sm:hidden" />
                        <HiMenuAlt2 className="hidden sm:block" style={{ fontSize: "35px", color: "hsl(233, 26%, 24%)" }} onClick={()=> setSidebarIsVisible(true)} />
                    </div>
                    <div className="">
                        {/* <SearchBar /> */}
                    </div>
                    <div className="justify-self-end flex gap-x-6 sm:gap-x-7">
                        <Link href="/cart">
                        <div className="relative self-center bg-lightest-gray rounded-lg py-[.5rem] px-[.6rem] border-2 border-dark-blue">
                            <div className="absolute -top-2 -right-5 font-bold text-md text-white text-center w-7 bg-lime-green rounded-lg">3</div>
                            <FiShoppingBag style={{ color: "hsl(233, 26%, 24%)", fontSize: "22px", borderRadius: ".5rem", marginRight: "0" }} />
                        </div>
                        </Link>
                        <MdAccountBox style={{ fontSize: "50px", margin: "0" }} />
                    </div> 
                </nav>
            </header>
        </>
    )
}

export default Navbar;