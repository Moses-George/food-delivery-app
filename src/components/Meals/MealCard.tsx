import { FaPlus } from "react-icons/fa";
import img1 from "@src/assets/images/bg/porridge.jpeg";
import Image from "next/image";

const MealCard = () => {

    return (
        <div className="whitespace-normal m-5 inline-flex flex-col w-56  bg-white gap-y-4 shadow-md rounded-lg">
            <Image src={img1} alt="imgae1" className="self-center w-full h-44 rounded-t-md  mb-5" />
            <div className="">
                <h2 className="text-center text-dark-blue font-bold mb-2">Sesame Dressing Salad</h2>
                <p className="text-center text-medium-gray">Salad vegetable mixed with salmon and eggs</p>
            </div>
            <div className="flex justify-between items-center pb-5 px-3 ">
                <h4 className="font-semibold">$30.24</h4>
                <button className="shadow-md p-3 bg-lime-green rounded-sm">
                    <FaPlus style={{color: "#fff"}} />
                </button>
            </div>
        </div>
    )
}

export default MealCard; 