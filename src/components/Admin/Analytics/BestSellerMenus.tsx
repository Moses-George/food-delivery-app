import Image from "next/image";
import pic1 from "@src/assets/images/bg/porridge.jpeg";
import { MdFavorite } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";

const BestSellerMenu = () => {

    return (
        <div className="flex gap-y-1 flex-col border-b-2 py-8">
            <Image src={pic1} alt="" className="h-36 rounded-lg" />
            <h3 className="font-semibold">Medium spicy pizza with kemangi leaf</h3>
            <div className="flex justify-between">
                <span className="text-lg text-dark-gray font-bold">$675</span> 
                <div className="flex items-center gap-x-1">
                    <MdFavorite className="text-2xl text-dark-peach" />
                    <span className="font-semibold">222k</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <FcSalesPerformance className="text-xl text-dark-peach" />
                    <span className="font-semibold">222k</span>
                </div>
            </div>
        </div>
    )
}


const BestSellerMenus = () => {

    return (
        <div className="bg-white rounded-md shadow-lg p-6 space-y-">
            <div className="p">
                <h1 className="text-2xl text-dark-gray font-semibold">Best Seller Menus</h1>
                <p className="">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex flex-col pt-6 h-[30rem] scroller">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(menu => <BestSellerMenu key={menu} />)}
            </div>
            <div className="opacity-50 text-dark-gray text-center underline cursor-pointer pt-4">See more...</div>
        </div>
    )
}

export default BestSellerMenus;