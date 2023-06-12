import HotMealCard from "./HotMeal";



const HotMealsRow = () => {

    return (
        <div className="bg-lightest-gray w-full h-full">
            <h1 className="container text-5xl sm:text-3xl text-dark-blue py-12 md:ml-5">Hot Dishes</h1>
            <div className="container h-full grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:gap-y-28 md:gap-y-24 pt-24 sm:pt-20 pb-24 gap-10">
                <HotMealCard />
                <HotMealCard />
                <HotMealCard />
                <HotMealCard />
            </div>
        </div>
    )
}

export default HotMealsRow;