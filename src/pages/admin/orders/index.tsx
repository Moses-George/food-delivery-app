import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout"; 
import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
import SearchBar from "@src/components/UI/Search/SearchBar";
import Link from "next/link";


const Orders = () => {

    return (
        <ProfileLayout header="Orders" >
            <section className="mx-6">
                <div className="flex justify-between">
                    <SearchBar />
                    <MenuDropDown />
                </div>
                <Link href="orders/338828">#338828</Link>
            </section>
        </ProfileLayout>
    )
}

export default Orders;