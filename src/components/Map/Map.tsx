import Link from "next/link";
import { useState } from "react";
import PaymentOptions from "../UI/Modals/PaymentOptions/PaymentOptions";


const Map = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [slideUp, setSlideUp] = useState(false);

    const openPaymentOptionsModal = () => {
        setSlideUp(false);
        setShowOptions(true);
    }

    return (
        <>
             <PaymentOptions slideUp={slideUp} setSlideUp={setSlideUp} showOptions={showOptions} setShowOptions={setShowOptions} />
            <div className="justify-self-end border-2 h-full w-full px-10">
                <button onClick={openPaymentOptionsModal} className="text-5xl">checkout</button>
            </div>
        </>
    )
}

export default Map;