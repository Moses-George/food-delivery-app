import NewMealForm from "@src/components/Admin/NewMeal/NewMealForm";
import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";


const NewMeal = () => {

    return (
        <ProfileLayout header="Add new Item">
            <section className="bg-white py-8 pb-4 sm:pb-16 px-8 sm:px-4 shadow-lg mx-6">
                <NewMealForm />
            </section>
        </ProfileLayout>
    )
}

export default NewMeal;