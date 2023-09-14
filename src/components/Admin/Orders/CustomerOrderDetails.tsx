import { FaPhone } from "react-icons/fa";
import { MdAccountCircle, MdLocationPin } from "react-icons/md";


const CustomerOrderDetails = () => {

    return (
        <div className="bg-white rounded-md shadow-lg h-4/5">
            <div className="p-8 flex gap-x-3 border-b">
                <MdAccountCircle className="text-6xl" />
                <div className="space-y-1">
                    <p className="text-lg text-dark-blue font-semibold">David Beckham</p>
                    <p className="py-1 px-2 bg-gray-100 rounded-lg text-medium-gray">customer</p>
                </div>
            </div>
            <div className="p-8 flex gap-x-3 border-b">
                <FaPhone className="text-xl" />
                <span className="text-dark-gray font-medium">+234 816 349 257 6</span>
            </div>
            <div className="p-8 flex gap-x-3 border-b">
            <MdLocationPin className="text-2xl text-dark-blue" />
            <span className="text-dark-gray font-medium">19, unity avenue off isuti road</span>
            </div>
            <div className="p-10 space-y-1">
                <p className="text-dark-blue text-lg font-bold">Order note</p>
                <p className="text-medium-gray text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium aliquid itaque eius laboriosam placeat aperiam ipsa odit delectus dolore.</p>
            </div>
        </div>
    )
}

export default CustomerOrderDetails;