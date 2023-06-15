import React, { useState } from "react";
import Backdrop from "../../Backdrop/Backdrop";
import Portal from "@src/components/Portal/Portal";
import Image from "next/image";
import mastercard from "@src/assets/images/payment/mastercard.svg";
import visa from "@src/assets/images/payment/visa.svg";
import paypal from "@src/assets/images/payment/paypal.svg";
import card from "@src/assets/images/payment/card.svg";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

interface methodProps {
    checked: boolean;
    onChange: () => void;
    name: string;
    icon: any
}

const methodData = [ 
    {id:"m1", name:"Paypal",  icon: <FaCcPaypal className="w-40 h-24 text-blue"  />},
    {id:"m2", name:"Master card", icon: <FaCcMastercard className="w-40 h-24 text-dark-peach" /> },
    {id:"m3", name:"Visa", icon: <FaCcVisa className="w-40 h-24 text-dark-blue" />} 
]


const Method = ({checked, onChange, name, icon}: methodProps) => {

    return (

        <div className={`flex justify-between items-center  w-full h-28 px-3 py-6 shadow-sm border-2 ${checked && "border-dark-peach"} rounded-md`}>
                <input
                    id="radio"
                    type="radio"
                    onChange={onChange}
                    checked={checked}
                    name={name}
                    className="-ml-30 w-5 h-5"
                />
                {/* <div className=""> */}
                    {icon}
                {/* </div> */}
        </div>
    )
}



const PaymentOptions = () => {

    const [display, setDisplay] = useState(false);
    const [method, setMethod] = useState<string>("");

    return (
        <Portal selector="#portal-root">
            <Backdrop onClick={() => setDisplay(true)} />  
            <div className="justify-self-center container fixed top-5 z-[9999] w-[35%] sm:w-[95%] h-[90%] sm:h-[95%]  bg-white rounded-md ">
                <h1 className="text-3xl text-dark-gray pt-3">Payment options</h1>
                {/* <Image src={card} alt="" className="-mt-0 h-40 w-full" /> */}
                <div className="py-6 grid gap-y-5">
                    {methodData.map(pay=> <Method key={pay.id} name={pay.name} onChange={()=> setMethod(pay.id)} checked={pay.id === method} icon={pay.icon} />)}
                </div>
                <div className="flex justify-between text-lg py-3">
                    <button onClick={()=> setDisplay(false)} className="px-5 py-2 border-2 border-medium-peach text-dark-peach rounded-md">Cancel</button>
                    <button className="px-5 py-2 bg-medium-peach rounded-md text-white">Continue</button>
                </div>
            </div>
        </Portal>
    )
}

export default PaymentOptions;