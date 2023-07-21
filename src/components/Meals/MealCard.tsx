import { FaPlus } from "react-icons/fa";
import img1 from "@src/assets/images/bg/porridge.jpeg";
import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { addItemToCart, cartSelector } from "@src/store/features/cart/cartSlice";
import { Product } from "@src/utils/AvailableMeals/data";

// interface MealProps {
//     name: string;
//     price: number;
//     imageUrl: string;
// }

const MealCard = ({ id, name, price, imageUrl }: Product) => {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(cartSelector);

    console.log(cartItems);

    const newItem = {
        id: id,
        name: name,
        price: price,
        imageUrl: imageUrl,
        totalPrice: price,
        quantity: 1
    }

    return (
        <div className="relative whitespace-normal d-card m-3 inline-flex flex-col w-60  bg-whie gap-y-4  rounded-lg">
            <div className="absolute right-3 top-3 rounded-full p-2 bg-[#fafcff]">
                <MdFavorite className="text-dark-peach text-2xl" />
            </div>
            <Image src={img1} alt="imgae1" className="self-center w-full h-44 rounded-t-lg" />
            <div className="">
                <h2 className="text-center text-dark-gray font-bold mb-2 px-4">{name}</h2>
                <p className="text-center text-medium-gray">Salad vegetable mixed with salmon and eggs</p>
            </div>
            <div className="flex justify-between items-center pb-5 px-4 ">
                <h4 className="font-semibold">${price}</h4>
                <button onClick={()=> dispatch(addItemToCart(newItem))} className="shadow-md p-3 bg-medium-peach rounded-md">
                    <FaPlus style={{ color: "#fff" }} />
                </button>
            </div>
        </div>
    )
}

export default MealCard; 