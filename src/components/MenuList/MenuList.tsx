

const MenuList = () => {

    return (
        <div>
            <h1 className="container text-4xl sm:text-3xl text-dark-gray pb-0 pt-12 md:ml-5"><span className="text-dark-peach">M</span>enu</h1>
            <div className="scroller flex items-center flex-nowrap gap-x-5 px-3 h-36">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(menu => <button key={menu} className="px-4 py-2 border-2 border-dark-peach rounded-3xl text-dark-peach shadow-sm w-fit hover:border-lightest-peach hover:bg-dark-peach hover:text-white">Vegetables</button>)}
            </div>
        </div>
    )
}

export default MenuList; 