import { Products } from "@src/utils/AvailableMeals/data";
import MealCard from "./MealCard";


const MealsRow = () => {

    return (
        <div className="bg-lightest-peach w-full h-full"> 
            <h1 className="container mb-0 text-4xl sm:text-3xl text-dark-gray pb-0 pt-12 md:ml-5">Starter Menu</h1>
            <div className="scroller h-full  pt-20 sm:pt-16 pb-20 px-3">
                {Products.map(meal => <MealCard key={meal.id} id={meal.id} name={meal.name} price={meal.price} imageUrl={meal.imageUrl} />)}
            </div>
        </div>
    )
}

export default MealsRow;