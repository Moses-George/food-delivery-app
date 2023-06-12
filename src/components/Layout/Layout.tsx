import { Fragment, PropsWithChildren } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({children}: PropsWithChildren) => {

    return (
        <Fragment>
            <Navbar />
            <main className="mt-20 sm:mt-12">{children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout;