import Image from "next/image";
import SearchBar from "@src/components/UI/Search/SearchBar";
import img from "@src/assets/images/bg/porridge.jpeg";
import { BsFillCartFill } from "react-icons/bs";


const PopularSearchItem = () => {

    return (
        <div className="flex justify-between items-center space-x-7 px-2 py-5 border-b-2">
            <div className="flex items-center space-x-3">
                <Image src={img} alt="" className="w-20 h-20 rounded-xl" />
                <div className="">
                    <h2 className="text-lg font-semibold text-dark-gray">Salmon and salad</h2>
                    <p>$13.22</p>
                </div>
            </div>
            <button className="flex items center space-x-2 py-2  px-3 bg-medium-peach rounded-lg text-white shadow-md">
                <span className="text-sm">Add to cart</span>
                <BsFillCartFill style={{ fontSize: "18px" }} />
            </button>
        </div>
    )
}

const Search = () => {

    return (
        <div className="grid grid-cols-[3.5fr_3fr_3.5fr] mt-28 px-10">
            <aside className="bg-white shadow-md py-10 px-5">
                <h1 className="text-3xl text-dark-gray pb-10">Popular searches</h1>
                <div className="grid">
                    <PopularSearchItem />
                    <PopularSearchItem />
                    {/* <PopularSearchItem /> */}
                    <PopularSearchItem />
                </div>
            </aside>
            <section className="px-5 py-10 bg-white my-10 shadow-md">
                <h1 className="text-2xl text-dark-gray pb-10">Looking for your favourite meal?</h1>
                <SearchBar />
                <div className="flex py-10 flex-wrap gap-x-2 gap-y-3">
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">vegetable</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                    <div className="px-4 py-1 border-2 border-dark-peach rounded-2xl text-dark-peach">Rice</div>
                </div>
            </section>
            <section className=""></section>
        </div>
    )
}

export default Search;