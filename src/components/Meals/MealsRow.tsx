import MealCard from "./MealCard";


const MealsRow = () => {

    return (
        <div className="bg-lightest-peach w-full h-full"> 
            <div className="scroller h-full pt-32 sm:pt-20 pb-20 px-3"> 
                {[1,2,3,4,5,6,7,8,9].map(meal=> <MealCard key={meal} />)}
            </div>
        </div>
    )
}

export default MealsRow;