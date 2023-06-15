import Portal from "@src/components/Portal/Portal"; 
import Backdrop from "@src/components/UI/Backdrop/Backdrop";
import { MdOutlineArrowBack } from "react-icons/md";

interface sidebarProps {
    closeSidebar: () => void;
}


const Sidebar = ({ closeSidebar }: sidebarProps) => {

    return (
        <Portal selector="#portal-root">
            <Backdrop onClick={closeSidebar} />
            <aside className="fixed top-0 z-[9999] rouned-md w-3/5 h-full bg-white">
                <div className="absolute top-20 -right-7 w-14 h-14 p-3 rounded-full bg-white">
                    <MdOutlineArrowBack onClick={closeSidebar} style={{ color: "hsl(233, 26%, 24%)", fontSize: "35px", textAlign: "center" }} />
                </div>
            </aside>
        </Portal>  
    )
}

export default Sidebar;