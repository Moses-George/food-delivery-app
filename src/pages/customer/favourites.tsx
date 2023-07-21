import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";
import MealCard from "@src/components/Meals/MealCard";
import MealsRow from "@src/components/Meals/MealsRow"; 
import { hasToken } from "@src/middleware/authCheck";
import { GetServerSideProps, NextApiRequest } from "next";


const Favourites = () => {

    return (
        <ProfileLayout header="Favourites" >
            <section className="sm:h-full p-3 bg-white shadow-md mx-6 sm:pb-12">
                <h1 className="text-2xl text-dark-blue p-4">Your Favourites</h1>
                <div className="flex flex-wrap scroller h-[28rem] sm:justify-center">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(meal => <MealCard key={meal} id={""} name={""} price={0} imageUrl={""} />)}
                </div>
            </section>
        </ProfileLayout>
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