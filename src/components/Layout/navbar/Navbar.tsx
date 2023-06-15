import React, { useState } from "react";
import { MdAccountBox } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import logo from "@src/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

    return (
        <>
            {sidebarIsVisible && <Sidebar closeSidebar={() => setSidebarIsVisible(false)} />}
            <header className="bg-nav-bg backdrop-blur-md mx-auto my-0 fixed  left-0 top-0 w-full transition ease-out delay-100 duration-500 z-[100]">
                <nav className=" container grid grid-cols-3 items-center py-0 sm:py-4 px-5">
                    <div className="">
                        <Image src={logo} alt="logo" className="w-20 sm:hidden" />
                        <HiMenuAlt2 className="hidden sm:block" style={{ fontSize: "35px", color: "hsl(233, 26%, 24%)" }} onClick={() => setSidebarIsVisible(true)} />
                    </div>
                    <div className="">
                    </div>
                    <div className="justify-self-end flex items-end gap-x-4 sm:gap-x-3">
                        <div className="p-2 rounded-lg bg-medium-peach">
                        <FaSearch style={{fontSize:"20px", color: "#fff"}} />
                        </div>
                        <Link href="/cart">
                            <div className="relative self-end border-dark-peach rounded-lg py-[.3rem] px-[.4rem] border-2 mr-3">
                                <div className="absolute -top-2 -right-5 font-bold text-md text-white text-center w-7 bg-medium-peach rounded-lg">3</div>
                                <FiShoppingBag style={{ color: "#DA0463", fontSize: "22px", borderRadius: ".5rem", marginRight: "0" }} />
                            </div>
                        </Link>
                        <MdAccountBox className="-mb-2 text-dark-blue" style={{ fontSize: "50px" }} />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;