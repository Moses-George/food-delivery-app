import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaFirstOrderAlt, FaUsers, FaFirstOrder } from "react-icons/fa";
import { MdNotifications, MdRestaurantMenu, MdAccountCircle, MdAddCircle, MdLocalOffer, MdSettings, MdOutlineArrowBack, MdFavorite } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import { AiFillDashboard } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { GiHotMeal } from "react-icons/gi";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { useAppDispatch } from "@src/store/hooks";
import ProfileSidebarIcons from "../ProfileSidebarIcons/ProfileSidebarIcons";


interface ProfileSidebarProps {
    display?: string;
    zIndex?: string;
    toggleSidebar?: () => void;
}

interface Links {
    id: string;
    name: string;
    href: string;
    icon: ReactNode;
}

const ProfileSidebar = ({ display, toggleSidebar, zIndex }: ProfileSidebarProps) => {

    const pathname = usePathname();

    const { data: session } = useSession();
    console.log(session);

    const isAdmin = true;

    const adminLinks: Links[] = [
        {
            id: "l1",
            name: "Dashboard",
            href: "/admin",
            icon: <AiFillDashboard className="text-xl" />
        },
        {
            id: "l2",
            name: "Meals",
            href: "/admin/meals",
            icon: <GiHotMeal className="text-xl" />
        },
        {
            id: "l3",
            name: "New Meal",
            href: "/admin/new-meal",
            icon: <MdAddCircle className="text-xl" />
        },
        {
            id: "l4",
            name: "Orders",
            href: "/admin/orders",
            icon: <FaFirstOrder className="text-xl" />
        },
        {
            id: "l5",
            name: "Customers",
            href: "/admin/customers",
            icon: <FaUsers className="text-xl" />
        },
        {
            id: "l6",
            name: "Analytics",
            href: "/admin/analytics",
            icon: <IoAnalytics className="text-xl" />
        },
        {
            id: "l7",
            name: "Hot Offers",
            href: "/admin/hot-offers",
            icon: <MdLocalOffer className="text-xl" />
        },
        {
            id: "l8",
            name: "Settings",
            href: "/admin/settings",
            icon: <IoSettings className="text-xl" />
        }
    ]

    const customerLinks = [];

    return (
        <aside className={`h-screen profile-sidebar bg-[#e21f3d] fixed top-0 md:hidden sm:${display} ${zIndex} w-[14rem]`}>
            <div>
                {!isAdmin && <h1 className="text-2xl text-white mx-auto pb-5 px-2">Welcome</h1>}
                <div className={`absolute top-20 -right-7 w-14 h-14 p-3 rounded-full bg-dark-peach ${display}`}>
                    <MdOutlineArrowBack className="text-center text-white text-3xl" onClick={toggleSidebar} />
                </div>
            </div>
            <div className="flex justify-between bg-[#ee2b48] text-white py-6 px-4">
                <h1 className="text-2xl">Admin</h1>
                <HiMenuAlt2 className="text-3xl" />
            </div>
            {!isAdmin && <div className="flex flex-col items-center w-full pb-5 sm:pb-7">
                <div className="p-2 w-fit h-fit border-4 border-white rounded-full">
                    <Image src="/people/person-1.png" alt="" width={90} height={90} />
                </div>
                <p className="text-md text-white font-semibold my-1">Moses George</p>
            </div>}
            {!isAdmin && <div className="grid gap-y-1 sm:gap-y-2 pl-2">
                <Link className="flex items-center space-x-2 bg-whit py-2 px-3 w-full h-full font-semibold shape" href="/user/favourites">
                    <MdFavorite className="text-xl text-dark-peach" />
                    <span className="text-md text-dark-peach">Favourites</span>
                </Link>
                <Link className="flex items-center space-x-2 py-2 px-2 rounded-tr-xl rounded-br-xl" href="/">
                    <FaFirstOrderAlt className="text-xl text-white" />
                    <span className="text-md text-white">My Orders</span>
                </Link>
                <Link className="flex items-center space-x-2 py-2 px-2 rounded-tr-xl rounded-br-xl" href="/">
                    <MdNotifications className="text-xl text-white" />
                    <span className="text-md text-white">Notifications</span>
                </Link>
                <Link className="flex items-center space-x-2 py-2 px-2 rounded-tr-xl rounded-br-xl" href="/">
                    <MdSettings className="text-xl text-white" />
                    <span className="text-md text-white">Settings</span>
                </Link>
            </div>}

            <div className="grid gap-y-1 sm:gap-y-2 pl-2 pt-10">
                {adminLinks.map(link => <Link key={link.id} className={`flex items-center space-x-2  py-2 px-3 font-semibold ${(link.href !== '/admin' ? pathname?.includes(link.href) : pathname === link.href) ? "active" : "inactive"}`} href={link.href}>
                    {link.icon}
                    <span className="text-md">{link.name}</span>
                </Link>)}
            </div>
            <div className="py-12 sm:py-8 px-2">
                <SiCodechef className="text-8xl text-white mx-auto" />
            </div>
            <div className="pb-5">
                <button className="flex items-center px-2 space-x-2 text-white">
                    <BiLogOut className="text-xl" />
                    <span className="text-md">Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default ProfileSidebar;