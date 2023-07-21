import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs"; 
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const HotMealCard = () => {

    return (
        <div className="relative d-card flex flex-col p-4 sm:p-5 sm:mt-0 w-56 sm:justify-self-center sm:w-72 bg-whie gap-y-9 shadow-lg rounded-lg">
            <div className="absolute top-24 left-0 py-1 px-2 bg-light-peach text-white text-sm rounded-tr-xl">50% off</div>
            <div className="absolute right-4 top-24 rounded-full p-2 bg-lightest-peach">
                <MdFavorite className="text-dark-peach text-2xl" />
            </div>
            <Image src="/content/image-2.png" alt="imgae1" width={100} height={100} className="self-center w-40 -mt-24 mb-5" />
            <div className="mt-2">  
                <h2 className="text-center text-dark-gray font-bold mb-2">Sesame Dressing Salad</h2>
                <p className="text-center text-medium-gray">Salad vegetable mixed with salmon and eggs</p>
            </div>
            <div className="flex justify-between items-center ">
                <div>
                    <span className="font-semibold text-xl text-dark-blue mr-1">$30.24</span>
                    <span className="text-sm line-through text-medium-gray">$40.00</span>
                    </div>
                <button className="shadow-md p-3 bg-medium-peach rounded-md">
                    <FaPlus style={{color: "#fff"}} />
                </button>
            </div>
        </div>
    ) 
}

export default HotMealCard;