import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, Fragment } from "react";
import { FaFirstOrderAlt } from "react-icons/fa";
import { MdNotifications, MdRestaurantMenu, MdAccountCircle, MdSettings } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";

const UserProfileLayout = ({ children }: PropsWithChildren) => {

    return (
        <div className="grid grid-cols-[1.7fr_8.3fr] sm:grid-cols-1 sm:mb-4 h-full w-full gap-x-5 pr-5 sm:pr-0 overflow-y-hidden">
            <ProfileSidebar display="hidden" position="static" width="w-full" />
            <Fragment>{children}</Fragment> 
        </div>
    )
}

export default UserProfileLayout;