import Portal from "@src/components/Portal/Portal"; 
import Backdrop from "@src/components/UI/Backdrop/Backdrop";
import { useRouter } from "next/router";
import { MdOutlineArrowBack } from "react-icons/md";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import { signOut } from "next-auth/react";
import { closeSidebar, toggleSelector } from "@src/store/features/sidebarToggle/toggleSidebar";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";


const Sidebar = () => {

    const dispatch = useAppDispatch();

    const { pathname } = useRouter();
    const isUserPage = pathname.includes("user");

    return (
        <Portal selector="#portal-root">
            <Backdrop onClick={()=> dispatch(closeSidebar())} />
            {!isUserPage ? <aside className="fixed top-0 z-[9999] rouned-md w-3/5 h-full bg-white">
                <div className="absolute top-20 -right-7 w-14 h-14 p-3 rounded-full bg-white">
                    <MdOutlineArrowBack onClick={()=> dispatch(closeSidebar())} style={{ color: "hsl(233, 26%, 24%)", fontSize: "35px", textAlign: "center" }} />
                </div>
                <button onClick={()=> signOut()} className="p-2 px-4 rounded-lg bg-medium-peach" >Signout</button>
            </aside>
            : <ProfileSidebar closeSidebar={()=> dispatch(closeSidebar())} zIndex="z-[9999]" display="block" position="fixed" width="w-3/5" />}
        </Portal>   
    )
}

export default Sidebar;