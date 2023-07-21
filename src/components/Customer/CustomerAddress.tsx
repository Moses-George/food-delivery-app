import { MdDelete } from "react-icons/md";

const Address = () => {

    return (
        <div className="flex justify-between items-center bg-[#ffe9e3] p-4 rounded-3xl">
            <span className="text-dark-peach">Address 1</span>
            <MdDelete className="text-lg text-dark-peach" />
        </div>
    )
}


const CustomerAddress = () => {

    return (
        <div className="w-full h-[30rem] col-start-3 col-end-4 sm:col-start-1 sm:col-end-4 row-start-1 row-end-3 sm:row-start-2 sm:row-end-3 p-3">
            <h1 className="text-2xl text-dark-blue pb-1">My Adresses</h1>
            <div className="relative flex flex-col py-4 gap-y-3 scroller max-h-[70%]">
                {[0, 1, 2, 3, 4, 5, 6].map(address => <Address key={address} />)}
            </div>
            <form className="flex flex-col pt-5 space-x-3">
                <div className="group">
                    <input type="text" name="from_address" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Address</label>
                </div>
                <button className="-mt-6 px-5 py-2 rounded-xl">Save</button>
            </form>
        </div>
    )
}

export default CustomerAddress;