import { FaPlus } from "react-icons/fa";

const HotMealCard = () => {

    return (
        <div className="relative flex flex-col p-5 sm:mt-0 w-56 sm:justify-self-center sm:w-72 bg-white gap-y-9 shadow-md rounded-lg">
            <div className="absolute top-24 left-0 py-1 px-2 bg-lime-green text-white text-sm rounded-tr-xl">50% off</div>
            <img src="/content/image-2.png" alt="imgae1" className="self-center w-40 -mt-24 mb-5" />
            <div className="">
                <h2 className="text-center text-dark-gray font-bold mb-2">Sesame Dressing Salad</h2>
                <p className="text-center text-medium-gray">Salad vegetable mixed with salmon and eggs</p>
            </div>
            <div className="flex justify-between items-center ">
                <div>
                    <span className="font-semibold text-lg text-dark-blue mr-1">$30.24</span>
                    <span className="text-xs line-through">$40.00</span>
                    </div>
                <button className="shadow-md p-3 bg-lime-green rounded-md">
                    <FaPlus style={{color: "#fff"}} />
                </button>
            </div>
        </div>
    )
}

export default HotMealCard;