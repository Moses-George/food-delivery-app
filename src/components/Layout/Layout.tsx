import { Fragment, PropsWithChildren } from "react";
import Footer from "./Footer/Footer";

const Layout = ({children}: PropsWithChildren) => {

    return (
        <Fragment>
            <main className="">{children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout;