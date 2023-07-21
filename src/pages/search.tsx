import Image from "next/image";
import SearchBar from "@src/components/UI/Search/SearchBar";
import img from "@src/assets/images/bg/porridge.jpeg";
import { BsFillCartFill } from "react-icons/bs";
import { FaCartPlus, FaPlus } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
import { useState } from "react";


const PopularSearchItem = () => {

    return (
        <div className="flex justify-between items-center space-x-7 sm:space-x-9 px-2 py-5 border-b-2">
            <div className="flex items-center space-x-3">
                <Image src={img} alt="" className="w-20 h-20 rounded-xl" />
                <div className="">
                    <h2 className="text-lg font-semibold text-dark-gray">Salmon and salad</h2>
                    <p>$13.22</p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <button className="p-1 bg-lightest-peach rounded-full">
                    <MdFavorite className="text-dark-peach text-xl" />
                </button>
                <button className="shadow-md p-2 bg-medium-peach rounded-md">
                    <FaCartPlus className="text-white" />
                </button>
            </div>
        </div>
    )
}

const Search = () => {

    const [newTag, setNewTag] = useState(false);

    return (
        <div className="grid grid-cols-[3.5fr_3fr_3.5fr] sm:grid-cols-1 mt-28 sm:mt-10 mb-40 sm:mb-10 px-10 sm:px-0 h-full">
            <aside className="bg-white shadow-md py-10 px-5 sm:row-start-3 sm:row-end-4 sm:mt-10">
                <h1 className="text-2xl text-dark-gray pb-10">Popular searches</h1>
                <div className="grid scroller  h-[35rem]">
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                </div>
            </aside>
            <section className="px-5 py-10 bg-white sm:my-10 shadow-md space-y-10">
                <h1 className="text-xl text-dark-gray">Looking for your favourite meal?</h1>
                <SearchBar />
                <div className="flex flex-wrap gap-x-2 gap-y-3">
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
                {!newTag && <div className="">
                    <button className="flex items-center gap-x-2 bg-medium-peach text-white py-2 px-4 rounded-xl shadow-md" onClick={()=> setNewTag(true)} >
                        <FaPlus className="" />
                        <span className="text-md">Add tag</span>
                    </button>
                </div>}
                {newTag && <div className="flex items-center gap-x-4">
                    <div className="group">
                        <input type="text" name="tag" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Tag</label>
                    </div>
                    <button className="bg-medium-peach text-white p-3 rounded-full shadow-md" onClick={()=> setNewTag(false)}>
                        <FaPlus className="" /> 
                    </button>
                </div>}
                <div className="h-fit space-y-2">
                    <span className="font-semibold text-medium-gray">Sort by</span>
                    <MenuDropDown />
                </div>
            </section>
            <section className="w-full h-full bg-white shadow-md px-5 pt-10">
                <h1 className="text-xl text-dark-gray pb-10">Results Found (20)</h1>
                <div className="grid h-[35rem] scroller">
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                    <PopularSearchItem />
                </div>
            </section>
        </div>
    )
}

export default Search;