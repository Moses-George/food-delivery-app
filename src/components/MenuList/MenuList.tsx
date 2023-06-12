

const MenuList = () => {

    return (
        <div className="scroller flex items-center flex-nowrap gap-x-5 px-2 h-36">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(menu=> <button key={menu} className="bg-grayish-blue py-2 px-3 text-white rounded-md shadow-md w-fit">Vegetables</button>)}
        </div>
    )
}

export default MenuList; 