import Image from "next/image";
import pic1 from "@src/assets/images/bg/porridge.jpeg";

const OrderItems = () => {

    return (
        <div className="w-full bg-white rounded-md shadow-lg p-4">
            <div className="w-full p-4 flex justify-between">
                <span className="font-semibold text-lg">Items</span>
                <div className="space-x-12">
                    <span className="font-semibold text-lg">Qty</span>
                    <span className="font-semibold text-lg">Price</span>
                    <span className="font-semibold text-lg">Total Price</span>
                </div>
            </div>

            <div className="">
                <div className="py-6 px-4 border-t flex justify-between items-center">
                    <div className="w-full flex items-center gap-2">
                        <Image src={pic1} alt="" className="w-20 h-20 rounded-lg" />
                        <div className="">
                            <p className="text-dark-peach font-medium">Main course</p>
                            <p className="font-medium text-lg">Water melon juice and ice</p>
                        </div>
                    </div>
                    <div className="space-x-12">
                        <span className="font-semibold text-lg pr-4">x2</span>
                        <span className="font-semibold text-lg pr-4">$4.12</span>
                        <span className="font-semibold text-lg pr-4">$4.12</span>
                    </div>
                </div>

                <div className="py-6 px-4 border-t flex justify-between items-center">
                    <div className="w-full flex items-center gap-2">
                        <Image src={pic1} alt="" className="w-20 h-20 rounded-lg" />
                        <div className="">
                            <p className="text-dark-peach font-medium">Main course</p>
                            <p className="font-medium text-lg">Water melon juice and ice</p>
                        </div>
                    </div>
                    <div className="space-x-12">
                        <span className="font-semibold text-lg pr-4">x2</span>
                        <span className="font-semibold text-lg pr-4">$4.12</span>
                        <span className="font-semibold text-lg pr-4">$4.12</span>
                    </div>
                </div>

                <div className="py-6 px-4 border-t flex justify-between items-center">
                    <div className="w-full flex items-center gap-2">
                        <Image src={pic1} alt="" className="w-20 h-20 rounded-lg" />
                        <div className="">
                            <p className="text-dark-peach font-medium">Main course</p>
                            <p className="font-medium text-lg">Water melon juice and ice</p>
                        </div>
                    </div>
                    <div className="space-x-12">
                        <span className="font-semibold text-lg pr-4">x2</span> 
                        <span className="font-semibold text-lg pr-4">$4.12</span>
                        <span className="font-semibold text-lg pr-4">$4.12</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItems;