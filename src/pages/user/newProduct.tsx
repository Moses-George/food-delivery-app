import NewProductForm from "@src/components/Admin/NewProduct/NewProductForm";
import UserProfileLayout from "@src/components/Layout/userProfileLayout/UserProfileLayout";


const NewProduct = () => {

    return (
        <UserProfileLayout>
            <section className=" bg-white py-6 px-8 shadow-md h-[82%] sm:h-fit w-full">
                <h1 className="text-dark-gray text-2xl font-semibold pb-5">Add new Item</h1>
                <NewProductForm />
            </section>
        </UserProfileLayout>
    )
}

export default NewProduct;