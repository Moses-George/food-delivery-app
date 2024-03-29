import { useEffect, useState, ReactNode, FC } from "react";  
import ReactDOM from "react-dom";

interface PortalProps {
    children: ReactNode;
    selector: string;
}

const Portal: FC<PortalProps> =  ({ children, selector }) => {
    const portalRoot = document.querySelector(selector);

    if (!portalRoot) {
        throw new Error(`cannot find root with selector ${selector}`);
    }

    return ReactDOM.createPortal(children, portalRoot);
}

export default Portal;