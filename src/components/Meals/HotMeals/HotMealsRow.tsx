import HotMealCard from "./HotMeal";



const HotMealsRow = () => {

    return (
        <div className="bg-lightest-peach w-full h-full">
            <h1 className="container underline-magical text-4xl sm:text-4xl text-dark-blue py-12 md:ml-5"><span className="text-dark-peach">Hot</span> Dishes</h1>
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