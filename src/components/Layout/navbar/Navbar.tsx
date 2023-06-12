import React from "react";
import { MdAccountCircle } from "react-icons/md";
import logo from "@src/assets/images/logo.svg";
import Image from "next/image";
import SearchBar from "@src/components/UI/Search/SearchBar";

const Navbar = () => {

    return (
        <header className="bg-nav-bg backdrop-blur-md mx-auto my-0 fixed  left-0 top-0 w-full transition ease-out delay-100 duration-500">
            <nav className=" container grid grid-cols-3 items-center py-0 px-5">
                <div className="">
                    <Image src={logo} alt="logo" className="w-20" />
                </div>
                <div className="">
                    <SearchBar />
                </div>
                <div className="justify-self-end">
                    <MdAccountCircle style={{ fontSize: "45px", margin: "0" }} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;