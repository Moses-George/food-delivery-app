import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import {IoAnalytics} from "react-icons/io5";
import CustomerFavouriteChart from "@src/components/Admin/Orders/CustomerFavouriteChart";
import CustomerOrderDetails from "@src/components/Admin/Orders/CustomerOrderDetails";
import DeliveryGuyDetails from "@src/components/Admin/Orders/DeliveryGuyDetails";
import DeliveryStatus from "@src/components/Admin/Orders/DeliveryStatus";
import OrderItems from "@src/components/Admin/Orders/OrderItems";
import OrderTracking from "@src/components/Admin/Orders/OrderTracking";
import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";
import MenuDropDown from "@src/components/UI/Search/MenuDropDown";


const OrderDetails = () => {

    const { query } = useRouter();

    return (
        <ProfileLayout header="Order Details" icon={<IoAnalytics className="text-4xl text-dark-gray" />} >
            <section className="mx-6 space-y-6">
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <button className="flex items-center w-20 py-1 px-3 border border-dark-peach text-dark-peach gap-x-1 rounded-xl">
                            <FaArrowLeft />
                            <span className="">Back</span>
                        </button>
                        <p className="text-xl text-dark-gray font-semibold">Order ID {query.orderId}</p>
                        <div className="space-x-1 text-md">
                            <Link href="/orders" className="font-bold text-dark-gray">Orders /</Link>
                            <span className="text-medium-gray">Order Details</span>
                        </div>
                    </div>
                    <MenuDropDown />
                </div>
                <div className="grid grid-cols-[7fr_3fr] sm:grid-cols-1 gap-6">
                    <div className="space-y-6">
                        <DeliveryStatus />
                        <OrderTracking />
                    </div>
                    <CustomerOrderDetails />
                </div>
                <div className="grid grid-cols-[7fr_3fr] sm:grid-cols-1 gap-6">
                    <div className="w-full space-y-6"> 
                        <DeliveryGuyDetails />
                        <OrderItems />
                    </div>
                    <CustomerFavouriteChart /> 
                </div>
            </section>
        </ProfileLayout>
    )
}

export default OrderDetails;