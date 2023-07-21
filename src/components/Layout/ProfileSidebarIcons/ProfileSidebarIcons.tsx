import Link from "next/link";
import { FaFirstOrderAlt } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";


const ProfileSidebarIcons = () => {

    return (
        <aside className="profile-sidebar h-screen fixed top-0 w-20 hidden md:block">
            <div className="absolute top-10 z-[999] -right-7 w-14 h-14 p-3 rounded-full bg-white">
                <MdOutlineArrowBack style={{ color: "hsl(233, 26%, 24%)", fontSize: "35px", textAlign: "center" }} />
            </div>
            <div className="p-4">
                <Link className="p-2" href="/admin/meals">
                    <FaFirstOrderAlt className="text-xl text-white" />
                </Link>
            </div>
        </aside>
    )
}

export default ProfileSidebarIcons;