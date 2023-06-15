import { FaPlus } from "react-icons/fa"; 
import img1 from "@src/assets/images/bg/porridge.jpeg";
import Image from "next/image";

const MealCard = () => {

    return (
        <div className="whitespace-normal d-card m-5 inline-flex flex-col w-60  bg-white gap-y-4  rounded-lg">
            <Image src={img1} alt="imgae1" className="self-center w-full h-48 rounded-t-lg  mb-5" />
            <div className="">
                <h2 className="text-center text-dark-gray font-bold mb-2">Sesame Dressing Salad</h2>
                <p className="text-center text-medium-gray">Salad vegetable mixed with salmon and eggs</p>
            </div>
            <div className="flex justify-between items-center pb-5 px-4 ">
                <h4 className="font-semibold">$30.24</h4>
                <button className="shadow-md p-3 bg-medium-peach rounded-md">
                    <FaPlus style={{color: "#fff"}} />
                </button>
            </div>
        </div>
    )
}

export default MealCard; 