import { FaPhone } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const DeliveryGuyDetails = () => {

    return (
        <div className="flex justify-between bg-dark-gray p-6 rounded-md shadow-lg w-full">
            <div className="flex gap-2">
                <MdAccountCircle className="text-7xl text-white" />
                <div className="">
                    <p className="text-light-gray text-sm">Delivery Guy</p>
                    <p className="text-lg text-white font-semibold">Rainold Hawkins</p>
                    <p className="text-light-gray text-sm">ID 32425</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-x-3 px-4 rounded-lg bg-gray-400 text-white">
                    <FaPhone className="text-xl" />
                    <div className="">
                        <p className="text-sm">Telephone</p>
                        <p className="font-medium">08163492576</p>
                    </div>
                </div>

                <div className="flex items-center gap-x-3 px-4 rounded-lg bg-gray-400 text-white">
                    <TbTruckDelivery className="text-2xl" />
                    <div className="">
                        <p className="text-sm">Delivery Time</p>
                        <p className="font-medium">10:52 AM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryGuyDetails;