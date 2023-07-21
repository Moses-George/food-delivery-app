import { IoAnalytics } from "react-icons/io5";
import BestSellerMenus from "@src/components/Admin/Analytics/BestSellerMenus";
import CustomerMap from "@src/components/Admin/Analytics/CustomerMap";
import Revenue from "@src/components/Admin/Analytics/Revenue";
import SalesSummary from "@src/components/Admin/Analytics/SalesSummary";
import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";
import dynamic from "next/dynamic";

// const chart = dynamic(()=> import("@src/components/Admin/Analytics/Revenue"), {ssr: false});


const Analytics = () => {

    return (
        <ProfileLayout header="Analytics" icon={<IoAnalytics className="text-4xl text-dark-gray" />}>
            <section className="mx-6 sm:mx-3 ">
                <div className="space-y-6">
                    <div className="w-full grid grid-cols-[7fr_3fr] sm:grid-cols-1 gap-6">
                        <SalesSummary />
                        <BestSellerMenus />
                    </div>
                    <div className="w-full grid grid-cols-[4fr_5fr] sm:grid-cols-1 gap-6">
                        <CustomerMap />
                        <Revenue />
                        {/* {chart} */}
                    </div>
                </div>
            </section>
        </ProfileLayout>
    )
}

export default Analytics;