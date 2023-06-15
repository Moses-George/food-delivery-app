

const MenuList = () => {

    return (
        <div>
            <h1 className="container text-5xl sm:text-3xl text-dark-gray pb-0 pt-12 md:ml-5">Menu</h1>
            <div className="scroller flex items-center flex-nowrap gap-x-5 px-3 h-36">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(menu => <button key={menu} className="bg-lightest-peach  py-2 px-3 text-white rounded-xl shadow-md w-fit">Vegetables</button>)}
            </div>
        </div>
    )
}

export default MenuList; 