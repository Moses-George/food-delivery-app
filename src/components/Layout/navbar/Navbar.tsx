import React, { useState } from "react";
import { MdAccountBox } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import logo from "@src/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { openSidebar, toggleSelector } from "@src/store/features/sidebarToggle/toggleSidebar";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";

const Navbar = () => {


    const { data: session } = useSession();
    console.log(session);
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(toggleSelector);
    console.log(toggle)

    return (
        <>
            {toggle.isVisible && <Sidebar />}
            <header className="bg-nav-bg backdrop-blur-md mx-auto my-0 fixed  left-0 top-0 w-full transition ease-out delay-100 duration-500 z-[100]">
                <nav className=" container grid grid-cols-3 items-center py-0 sm:py-4 px-5">
                    <div className="">
                        <Image src={logo} alt="logo" className="w-20 sm:hidden" />
                        <HiMenuAlt2 className="hidden sm:block" style={{ fontSize: "35px", color: "hsl(233, 26%, 24%)" }} onClick={() => dispatch(openSidebar())} />
                    </div>
                    <div className="">
                    </div>
                    <div className="justify-self-end flex items-end gap-x-4 sm:gap-x-2">
                        <div className="p-2 rounded-lg bg-medium-peach">
                            <Link href="/search" >
                                <FaSearch className="text-xl text-white" />
                            </Link>
                        </div>
                        {session && <Link href="/cart">
                            <div className="relative self-end border-dark-peach rounded-lg py-[.2rem] px-[.3rem] border-2 mr-3">
                                <div className="absolute -top-2 -right-6 font-bold text-md text-white text-center w-7 bg-medium-peach rounded-lg">3</div>
                                <FiShoppingBag className="text-dark-peach text-2xl" />
                            </div>
                        </Link>}
                        {session && <Link href="/user">
                            <MdAccountBox className="-mb-2 text-dark-blue text-5xl" />
                        </Link>}
                        {!session && <Link href="/login" className="py-1 px-3 rounded-3xl hover:opacity-50 border-4 border-dark-peach bg-lightest-peach text-dark-peach">Login</Link>}
                        {!session && <Link href="/signup" className="sm:hidden py-2 px-3 hover:opacity-70 rounded-3xl bg-dark-peach  text-white">Signup</Link>}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;