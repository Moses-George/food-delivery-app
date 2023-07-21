import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, Fragment, ReactNode, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { toggleSidebar, toggleSelector } from "@src/store/features/sidebarToggle/toggleSidebar";
import Sidebar from "../Sidebar/Sidebar";
import ProfileSidebarIcons from "../ProfileSidebarIcons/ProfileSidebarIcons";

interface ProfileProps {
    header?: string;
    icon?: ReactNode;
}

const ProfileLayout = ({ children, header, icon }: PropsWithChildren<ProfileProps>) => {

    const [isIcons, setIsIcons] = useState(false);

    const dispatch = useAppDispatch();
    const toggle = useAppSelector(toggleSelector);

    return (
        <>
            {toggle.isVisible && <Sidebar />}
            <div className={`sm:mb-4 h-full w-full sm:pr-0 mt-32`}>
                <ProfileSidebarIcons />
                <ProfileSidebar display="hidden" zIndex="z-[100]" />
                <div className={`space-y-6 w-full pl-[14rem] pb-12 sm:pl-0 h-scren sm:h-full`}>
                    <div className={`flex justify-between py-5 w-full pr-[15.3rem] sm:pr-0 sm:pl-0 pl-6 shadow-sm fixed top-0 bg-nav-bg backdrop-blur-md mx-auto my-0 transition ease-out delay-100 duration-500 z-[100]`}>
                        <div className="flex items-center gap-x-2 sm:hidden">
                            {icon}
                            <h1 className="text-dark-gray text-2xl font-semibold">{header}</h1>
                        </div>
                        <HiMenuAlt2 className="text-3xl text-dark-gray sm:block hidden sm:ml-4" onClick={() => dispatch(toggleSidebar())} />
                        <div className="justify-self-end flex items-end gap-x-4 sm:gap-x-2 sm:mr-4">
                            <div className="p-2 rounded-lg bg-medium-peach">
                                <Link href="/search" >
                                    <FaSearch className="text-xl text-white" />
                                </Link>
                            </div>
                            <Link href="/cart">
                                <div className="relative self-end border-dark-peach rounded-lg py-[.2rem] px-[.3rem] border-2 mr-3">
                                    <div className="absolute -top-2 -right-6 font-bold text-md text-white text-center w-7 bg-medium-peach rounded-lg">3</div>
                                    <FiShoppingBag className="text-dark-peach text-2xl" />
                                </div>
                            </Link>
                            <MdAccountBox className="-mb-2 text-dark-blue text-5xl" />
                        </div>
                    </div>
                    <Fragment>{children}</Fragment>
                </div>
            </div>
        </>
    )
}

export default ProfileLayout;