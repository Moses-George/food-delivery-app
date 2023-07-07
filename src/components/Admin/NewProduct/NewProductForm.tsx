import { BsCardImage, BsImageFill } from "react-icons/bs";
import { MdCloudUpload } from "react-icons/md";


const NewProductForm = () => {

    return (
        <form className="w-full h-full flex justify-between space-x-12">
            <div className="w-full max-w-md">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                    </label> */}
                    <input required className="appearance-none block w-full bg-[#ffe2da] text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter name of product...." />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="flex flex-wrap mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            State
                        </label> */}
                        <div className="relative">
                            <select required className="block appearance-none w-full bg-[#ffe2da] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option></option>
                                <option>Desserts</option>
                                <option>Drinks</option>
                                <option>Texas</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                        </label> */}
                        <span className="text-sm text-medium-gray absolute bottom-3 right-16 font-semibold">-50%</span>
                        <input required className="appearance-none block w-full bg-[#ffe2da] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="original price" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                        </label> */}
                        <input required className="appearance-none block w-full bg-[#ffe2da] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="discount price" />
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <textarea required id="message" rows={3} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-dark-peach focus:outline-none" placeholder="description of product..."></textarea>
                </div>
            </div>
            <div className="w-full flex flex-col space-y-12">
                <div className="flex space-x-8">
                    <div className="flex flex-col h-72 p-4 bg-[#ffe2da] w-full border-2 border-dashed border-dark-peach rounded-md text-center justify-center">
                        <MdCloudUpload className="text-4xl text-medium-gray self-center" />
                        <p className="text-medium-gray font-semibold">Drag and drop image or <span className="text-md text-dark-peach">Browse</span></p>
                        <p className="text-sm text-medium-gray">File type include jpeg, jpg, png</p>
                    </div>
                    <div className="flex w-full h-72 bg-[#ffe2da] rounded-md">
                        <BsCardImage className="text-8xl text-dark-peach m-auto justify-center" />
                    </div>
                </div>
                <button className="self-end py-3 px-5 bg-dark-peach text-white text-sm rounded-lg shadow-md">Add product</button>
            </div>
        </form>
    )
}

export default NewProductForm;