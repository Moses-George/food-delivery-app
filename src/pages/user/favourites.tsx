import UserProfileLayout from "@src/components/Layout/userProfileLayout/UserProfileLayout"
import MealCard from "@src/components/Meals/MealCard";
import MealsRow from "@src/components/Meals/MealsRow";
import { hasToken } from "@src/middleware/authCheck";
import { GetServerSideProps, NextApiRequest } from "next";


const Favourites = () => {

    return (
        <UserProfileLayout>
            <section className="w-full h-[90%] sm:h-full  p-3 bg-white shadow-md mt-6 sm:pb-12">
                <h1 className="text-2xl text-dark-blue p-4">Your Favourites</h1>
                {/* <div className="flex flex-wrap scroller h-[28rem] sm:justify-center">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(meal => <MealCard key={meal} />)}
                </div> */}
            </section>
        </UserProfileLayout>
    )
}

export default Favourites;

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