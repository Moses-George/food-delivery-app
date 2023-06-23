import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    return (
        <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full shadow-md rounded-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-300 block w-full pl-10 p-2.5  " placeholder="Search for your favourite meal..." required />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-medium-peach rounded-lg border border-dark-peach hover:bg-dark-peach focus:ring-4 focus:outline-none focus:ring-lightest-peach shadow-sm">
            <FaSearch className="w-5 h-5" />
            <span className="sr-only">Search</span>
        </button>
    </form>
    )
}

export default SearchBar;