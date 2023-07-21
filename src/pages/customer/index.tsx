import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";
import CustomerAddress from "@src/components/Customer/CustomerAddress";
import CustomerDetails from "@src/components/Customer/CustomerDetails";
import { hasToken } from "@src/middleware/authCheck";
import { GetServerSideProps, NextApiRequest } from "next";


const UserProfile = () => {


    return (
        <ProfileLayout>
            <section className="grid grid-cols-3 sm:grid-cols-1 gap-y-4 justify-center h-fit py-8 sm:h-fit shadow-md space-x-2 mx-4 sm:container bg-white px-5 sm:py-12">
                <CustomerDetails />
                <CustomerAddress />
                <div className="w-full h-full bg-dark-blu row-start-2 row-end-3 col-start-1 col-end-3"></div>
            </section>
        </ProfileLayout>
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