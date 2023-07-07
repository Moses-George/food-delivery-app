import UserProfileLayout from "@src/components/Layout/userProfileLayout/UserProfileLayout";
import UserAddress from "@src/components/User/UserAddress";
import UserDetails from "@src/components/User/UserDetails";
import { hasToken } from "@src/middleware/authCheck";
import { GetServerSideProps, NextApiRequest } from "next";


const UserProfile = () => {


    return (
        <UserProfileLayout>
            <section className="grid grid-cols-3 sm:grid-cols-1 gap-y-4 justify-center w-full h-[82%] sm:h-fit shadow-md space-x-2 -ml-4 mr-4 sm:container bg-white px-5 py-3 sm:py-12">
                <UserDetails />
                <UserAddress />
                <div className="w-full h-full bg-dark-blu row-start-2 row-end-3 col-start-1 col-end-3"></div>
            </section>
        </UserProfileLayout>
    )
}

export default UserProfile;

export const  getServerSideProps: GetServerSideProps = async (context) => {

    const token = await hasToken(context.req as NextApiRequest);
  
    if(!token){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
  
    return { props: {}}
  }