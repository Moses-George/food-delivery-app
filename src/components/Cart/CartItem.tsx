import Image from "next/image";
import food from "@src/assets/images/bg/porridge.jpeg";
import { AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";


const CartItem = () => {

    return (
        <div className="flex sm:flex-col sm:gap-y-4 py-5 justify-between w-full gap-x-16 border-b-2">
            <div className="flex items-center gap-x-3">
                <Image src={food} alt="" className="w-24 h-24 rounded-md" />
                <div className="">
                    <h2 className="text-xl font-bold text-dark-gray">Chicken and Ribs combo</h2>
                    <p className="text-grayish-blue">Lorem ipsum dolor sit amet consectetur adipisicing elit doloremque?</p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-x-5">
                <div className="flex items-center gap-x-3 sm:gap-x-4">
                    <button className="p-2 rounded-lg bg-light-gray"> <AiOutlineMinus style={{ color: "hsl(233, 26%, 24%)", fontSize: "13px" }} /> </button>
                    <p className="text-dark-blue text-md font-semibold">2</p>
                    <button className="p-2 rounded-lg bg-light-gray"><FaPlus style={{ color: "hsl(233, 26%, 24%)", fontSize: "13px" }} /> </button>
                </div>
                <div className="flex items-center gap-x-3">
                    <h3 className="font-semibold text-xl text-dark-gray">$12.40</h3>
                    <AiOutlineDelete style={{ color: "hsl(233, 26%, 24%)", fontSize: "20px" }} />
                </div>
            </div>
        </div>
    )
}

export default CartItem;
