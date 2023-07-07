import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, Fragment } from "react";
import { FaFirstOrderAlt, FaSearch } from "react-icons/fa";
import { MdNotifications, MdRestaurantMenu, MdAccountCircle, MdSettings, MdAccountBox } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { cartSelector } from "@src/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { openSidebar } from "@src/store/features/sidebarToggle/toggleSidebar";

const UserProfileLayout = ({ children }: PropsWithChildren) => {

    const dispatch = useAppDispatch();

    return (
        <div className="grid grid-cols-[1.7fr_8.3fr] sm:grid-cols-1 sm:mb-4 h-full w-full sm:pr-0 overflow-y-hidden">
            <ProfileSidebar display="hidden" position="static" width="w-full" />
            <div className="space-y-6 w-full h-screen sm:h-full">
                <div className="flex justify-between w-full py-4 shadow-md bg-white px-6">
                    <HiMenuAlt2 className="text-3xl text-dark-gray" onClick={()=> dispatch(openSidebar())} />
                    <div className="justify-self-end flex items-end gap-x-4 sm:gap-x-2">
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
    )
}

export default UserProfileLayout;