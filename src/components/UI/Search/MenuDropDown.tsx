import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";



const MenuDropDown = () => {

    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setDropdownIsVisible(prev=> !prev)} className="text-white bg-dark-peach  hover:bg-medium-peach focus:ring-4 focus:outline-none focus:ring-light-peach font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                Default filter 
                <MdArrowDropDown className="text-white text-2xl" />
            </button>
            {dropdownIsVisible && <div className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-md">
                <ul className="p-3 space-y-1 text-sm text-dark-gray" >
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                            <input id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-dark-peach focus:ring-2 " />
                            <span className="w-full ml-2 text-sm font-medium text-dark-gray rounded">Default radio</span> 
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                            <input  id="default-radio-5" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-dark-peach  focus:ring-2" />
                            <span className="w-full ml-2 text-sm font-medium text-dark-gray rounded">Default radio</span> 
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                            <input id="default-radio-6" type="radio" value="" name="default-radio" className="w-4 h-4 text-dark-peach bg-gray-100 border-gray-300 focus:ring-dark-peach  focus:ring-2" />
                            <span className="w-full ml-2 text-sm font-medium text-dark-gray rounded">Default radio</span> 
                        </div>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default MenuDropDown;