import { Fragment, PropsWithChildren } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import {SiChatbot} from "react-icons/si";

const Layout = ({ children }: PropsWithChildren) => {

    return (
        <Fragment>
            <div id='portal-root' className='grid'></div>
            <Navbar />
            <main className="mt-20 sm:mt-16">{children}</main>
            <Footer />
            <div className="fixed bottom-8 right-8 sm:bottom-4 sm:right-4 p-4 rounded-tl-full rounded-tr-4xl rounded-b-full  bg-dark-peach">
                <SiChatbot style={{fontSize:"25px", color:"#fff"}} />
            </div>
        </Fragment>
    )
}

export default Layout;