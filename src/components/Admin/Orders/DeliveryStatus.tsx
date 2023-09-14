

const DeliveryStatus = () => {

    return (
        <div className="flex w-full p-8 bg-white rounded-md shadow-lg">
            <div className="w-full space-y-2">
                <div className="flex items-center w-full">
                    <span className="p-3 rounded-full bg-dark-peach"></span>
                    <span className="w-full h-1 bg-dark-peach rounded-md -ml-1"></span>
                </div>
                <div className="p-2 space-y-2">
                    <h4 className="text-dark-gray text-lg font-semibold">Order created</h4>
                    <p className="text-sm">Thu 21, Jun 2023 1:45 am</p>
                </div>
            </div>

            <div className="w-full space-y-2">
                <div className="flex items-center w-full">
                    <span className="p-3 rounded-full bg-dark-peach"></span>
                    <span className="w-full h-1 bg-dark-peach rounded-md -ml-1"></span>
                </div>
                <div className="p-2 space-y-2">
                    <h4 className="text-dark-gray text-lg font-semibold">Payment Success</h4>
                    <p className="text-sm">Thu 21, Jun 2023 1:45 am</p>
                </div>
            </div>

            <div className="w-full space-y-2">
                <div className="flex items-center w-full">
                    <span className="p-3 rounded-full bg-dark-peach"></span>
                    <span className="w-full h-1 bg-dark-peach rounded-md -ml-1"></span>
                </div>
                <div className="p-2 space-y-2">
                    <h4 className="text-dark-gray text-lg font-semibold">On Delivery</h4>
                    <p className="text-sm">Thu 21, Jun 2023 1:45 am</p>
                </div>
            </div>

            <div className="w-full space-y-2">
                <div className="flex items-center w-full">
                    <span className="p-3 rounded-full bg-gray-300"></span>
                    <span className="w-full h-1 bg-gray-300 rounded-md -ml-1"></span>
                </div>
                <div className="p-2 space-y-2">
                    <h4 className="text-dark-gray text-lg font-semibold">Order Delivered</h4>
                    <p className="text-sm">Thu 21, Jun 2023 1:45 am</p>
                </div>
            </div>
        </div>
    )
}

export default DeliveryStatus;