import { useState } from "react"; 
import { useRouter } from "next/router";
import Image from "next/image";
import Backdrop from "../../Backdrop/Backdrop";
import Portal from "@src/components/Portal/Portal";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaArrowRight } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiCancel } from "react-icons/ti";
import Link from "next/link";
import Option from "./Option";
import { PaymentOptionsProps } from "@src/utils/interfaces/propsInterfaces";
import card from "@src/assets/images/payment/card.svg";


const optionsData = [
    { id: "m1", name: "Payment on delivery", icon: <FaCcPaypal className="text-[7rem] text-[blue]" /> },
    { id: "m2", name: "Online transaction", icon: <FaCcMastercard className="text-[7rem] text-[#f7791b]" /> }, 
    // { id: "m3", name: "Visa", icon: <FaCcVisa className="text-[7rem] text-dark-blue" /> }, 
    // { id: "m4", name: "Cash", icon: <GiTakeMyMoney className="text-[7rem] text-dark-blue" /> }
]



const PaymentOptions = ({ setShowOptions, showOptions, slideUp, setSlideUp }: PaymentOptionsProps) => {

    const [selectedOption, setSelectedOption] = useState<string>("");

    const router = useRouter();

    const proceedToPayment = () => {
        router.push(`/cart/checkout?option=${selectedOption}`);
    }

    const cancelPayment = () => {
        setShowOptions(false);
        setSlideUp(true);
    } 

    return ( 
        <Portal selector="#portal-root">
            {showOptions && <Backdrop onClick={() => setShowOptions(false)} />}
            <div className={`${showOptions && "slide-down"} ${slideUp && "slide-up"} transform translate-y-[-100%] justify-self-center fixed  z-[9999] w-[25rem] sm:w-[95%] h-[90%] sm:h-[93%]  bg-white rounded-md`}>
                <h1 className="text-2xl text-dark-gray py-3 px-4">Payment Methods</h1>
                <Image className="w-full h-40" src={card} alt="" />
                <div className="py-6 grid gap-y-4 container">
                    {optionsData.map(option => <Option key={option.id} name={option.name} onChange={() => setSelectedOption(option.name)} checked={option.name === selectedOption} icon={option.icon} />)}
                </div>
                <div className="flex justify-between text-lg pt-3 px-4">
                    <button onClick={cancelPayment} className="flex items-center space-x-2 px-4 py-2 border-2 border-medium-peach text-dark-peach rounded-md">
                        <TiCancel className="text-3xl" />
                        <span>Cancel</span>
                    </button>
                    {/* <Link href={{ pathname: "/cart/checkout", query: { option: selectedOption } }}> */}
                        <button onClick={proceedToPayment} className="flex items-center space-x-2 px-4 py-2 bg-medium-peach rounded-md text-white">
                            <span className="text-md">Continue</span>
                            <FaArrowRight className="text-xl" />
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </Portal>
    )
}

export default PaymentOptions;