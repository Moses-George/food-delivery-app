import { Fragment, PropsWithChildren, useEffect } from "react"; 
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { SiChatbot } from "react-icons/si";
import { useRouter } from "next/router";
import nProgress from 'nprogress';
import "../../styles/nprogress.module.css"; 


const MainLayout = ({ children }: PropsWithChildren) => { 

    const router = useRouter();
    const  { pathname } = useRouter(); 

    const isAuthPage = pathname === "/signup" || pathname === "/login";
    const isProfilePage = pathname.includes("customer") || pathname.includes("admin");
    // const isAdminPage = pathname.includes("admin");

    useEffect(()=> {
        router.events.on('routeChangeStart', ()=>nProgress.start());
        router.events.on('routeChangeComplete', ()=>nProgress.done());
        router.events.on('routeChangeError', ()=>nProgress.done());
    }, []);

    return (
        <Fragment>
            <div id='portal-root' className='grid'></div>
            {!isAuthPage && !isProfilePage  && <Navbar />} 
            <main className={`${!isAuthPage  && "mt-20 sm:mt-16"}`}>{children}</main>   
            {!isAuthPage && !isProfilePage  && <Footer />}
            {!isProfilePage && <div className="fixed bottom-8 right-8 sm:bottom-4 sm:right-4 p-3 rounded-tl-full rounded-tr-4xl rounded-b-full  bg-dark-peach">
                 <SiChatbot style={{ fontSize: "20px", color: "#fff" }} /> 
            </div>} 
        </Fragment>
    )
} 

export default MainLayout; 