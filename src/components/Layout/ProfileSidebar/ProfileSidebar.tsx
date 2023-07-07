import Image from "next/image";
import Link from "next/link";
import { FaFirstOrderAlt } from "react-icons/fa";
import { MdNotifications, MdRestaurantMenu, MdAccountCircle, MdSettings, MdOutlineArrowBack, MdFavorite } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import { useAppDispatch } from "@src/store/hooks";

interface ProfileSidebarProps {
    display: string;
    position: string;
    width: string;
    zIndex?: string;
    closeSidebar?: () => void;
}

const ProfileSidebar = ({ display, position, width, closeSidebar, zIndex }: ProfileSidebarProps) => {

    const dispatch = useAppDispatch();

    return (
        <aside className={`h-screen bg-dark-peach pt-5 ${zIndex} sm:${display} ${position} ${width}`}>
            <div>
                <h1 className="text-2xl text-white mx-auto pb-5 px-2">Welcome</h1>
                <div className={`absolute top-20 -right-7 w-14 h-14 p-3 rounded-full bg-dark-peach ${display}`}> 
                    <MdOutlineArrowBack className="text-center text-white text-3xl" onClick={closeSidebar} />
                </div>
            </div>
            <div className="flex flex-col items-center w-full pb-5 sm:pb-7">
                <div className="p-2 w-fit h-fit border-4 border-white rounded-full">
                    <Image src="/people/person-1.png" alt="" width={90} height={90} />
                </div>
                <p className="text-md text-white font-semibold my-1">Moses George</p>
            </div>
            <div className="grid gap-y-1 sm:gap-y-2">
                <Link className="flex items-center space-x-2 bg-white py-2 px-2 w-full h-full shape" href="/user/favourites">
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