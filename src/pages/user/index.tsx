import UserProfileLayout from "@src/components/Layout/userProfileLayout/UserProfileLayout";
import UserAddress from "@src/components/User/UserAddress";
import UserDetails from "@src/components/User/UserDetails";


const UserProfile = () => {


    return (
        <UserProfileLayout>
            <section className="grid grid-cols-3 sm:grid-cols-1 gap-y-4 justify-center w-full h-[90%] sm:h-fit shadow-md mt-6 sm:container bg-white px-5 py-3 sm:py-12">
                <UserDetails />
                <UserAddress />
                <div className="w-full h-full bg-dark-blu row-start-2 row-end-3 col-start-1 col-end-3"></div>
            </section>
        </UserProfileLayout>
    )
}

export default UserProfile;