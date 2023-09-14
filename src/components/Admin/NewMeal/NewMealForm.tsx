import Image from "next/image"; 
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { BsArrowsFullscreen} from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdCloudUpload, MdAddAPhoto, MdDiscount } from "react-icons/md";
import { toast } from "react-toastify";
import { Meal } from "@src/utils/interfaces/interfaces";


const InitialMeal: Meal = {
    name: '',
    price: 0,
    description: '',
    media: new Blob(),
    category: '',
    discountPrice: 0
}


const NewMealForm = () => {

    const router = useRouter();
    const { query } = useRouter();

    const [mealData, setMealData] = useState<Meal>(InitialMeal);
    const [mediaPreview, setMediaPreview] = useState<string>("");
    const [mediaUrl, setMediaUrl] = useState<string>("");
    const [discountPercent, setDiscountPercent] = useState(0);



    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event?.target;
        const files = (event.target as HTMLInputElement).files;

        if (name === 'media') {
            if (files) {
                setMealData((prevState => {
                    return { ...prevState, media: files[0] }
                }));
                setMediaPreview(window.URL.createObjectURL(files[0]));
            }
        } else {
            setMealData((prevState) => { return { ...prevState, [name]: value } });
        }
    }

    const handleImageUpload = async () =>  {

        try {
            //  using form contaructor to get data from the form 
            const data = new FormData();
            const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
            const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";
            data.append('file', mealData.media);
            data.append('upload_preset', preset);
            data.append('cloud_name', cloud);
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
                method: 'POST',
                body: data,
            });

            const mediaData = await response.json();
            setMediaUrl(mediaData?.url);
            
            if (!response.ok) {
                throw new Error(mediaData.message || 'Something went wrong uploading your image!');
            }


        } catch (err: any) {
            toast.error(err.message, { autoClose: 2000 });
            console.error(err);
        }

    }


//  submit form 
    const handleSubmit =  (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(mealData);
        handleImageUpload();
    }

    //  Send meal data to database
    useEffect(() => {

        const addNewMeal = async () => {

            const id = toast.loading("Adding new meal...");

            try {
                const { name, price, description, category, discountPrice } = mealData;
                const payload = { name, price, description, category, mediaUrl, discountPrice };
                const response = await fetch('/api/meal/add-meal', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'content-type': 'application/json',
                    },
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Something went wrong!'); 
                }

                toast.update(id, { render: data.message, type: "success", isLoading: false, autoClose: 4000 });

                // Empty the input fields after form submission
                setMealData(InitialMeal);
                setMediaUrl("");
            } catch (err: any) {
                toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 4000 });
                console.error(err);
            }
        }

        if (mediaUrl) {
            addNewMeal();
        }
    }, [mediaUrl]);

    //  calculate discount percentage
    useEffect(() => {
        const { price, discountPrice } = mealData;
        if (query.hotOffer && price > 0) {
            const percent = (discountPrice / price) * 100;
            setDiscountPercent(percent);
        }
    }, [mealData.price, mealData.discountPrice]);

    const removeImage = () => {
        if (mediaPreview) {
            setMediaPreview("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full h-full flex sm:flex-col justify-between gap-x-12">
            <div className="w-full max-w-md">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-state">Meal name</label>
                    <input required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={mealData.name}
                        placeholder="Enter name of meal...." />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="flex flex-wrap mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-state">Category</label>
                        <div className="relative">
                            <select required className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                                name="category"
                                onChange={handleChange}
                                value={mealData.category}
                            >
                                <option className="font-bold" disabled>Categories</option>
                                <option>Main Course</option>
                                <option>Pasta</option>
                                <option>Pizza</option>
                                <option>Soup</option>
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
                        <label className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-state">Price</label>
                        {query.hotOffer && <span className="text-sm text-medium-gray absolute bottom-3 right-16 font-bold">{`-${discountPercent.toFixed(2)}%`}</span>}
                        <input required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="price"
                            name="price"
                            type="number"
                            onChange={handleChange}
                            value={mealData.price}
                            placeholder="price" />
                    </div>
                    {query.hotOffer && <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-state">Discount Price</label>
                        <input required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            name="discountPrice"
                            type="number"
                            onChange={handleChange}
                            value={mealData.discountPrice}
                            placeholder="discount price" />
                        {discountPercent > 100 && <p className="mt-2 text-red-500 text-xs italic">Discount must be less than original price</p>}
                    </div>}
                </div>
                {!query.hotOffer && <Link className="w-[2rem] md:w-1/3 px-3 mb-6 md:mb-0" href={{ pathname: router.pathname, query: { ...query, hotOffer: true } }}>
                    <button className="self-end flex items-center gap-x-2 py-3 px-4 bg-dark-peach text-white rounded-lg shadow-md">
                        <MdDiscount className="text-xl" />
                        <span className="text-sm">Add discount</span>
                    </button>
                </Link>}
            </div>
            <div className="w-full flex flex-col space-y-12 sm:px-2">
                <div className="flex items-center sm:flex-col gap-x-8 sm:gap-x-0 sm:gap-y-6">
                    {!mediaPreview ? <label htmlFor="media-image" className="relative -mt-2 flex flex-col h-72 p-3 bg-gray-100 w-full border-2 border-dashed border-gray-700 rounded-md text-center justify-center cursor-pointer">
                        <MdCloudUpload className="text-4xl text-medium-gray self-center" />
                        <p className="text-medium-gray font-semibold text-sm">Click or Drag and drop image to upload image</p>
                        <MdAddAPhoto className="self-center text-3xl" />
                        <p className="text-sm text-medium-gray">File type include jpeg, jpg, png</p>
                        <input className="hidden" id="media-image" name="media" type="file" accept="image/*" multiple={false} onChange={handleChange} />
                    </label> :
                        <div className="w-full h-fit rounded-md shadow-md p-3 space-y-2">
                            <Image src={mediaPreview} alt="" className="w-full h-full" width={250} height={200} />
                            <div className="w-full flex justify-between items-center py-3">
                                <label className="relative bg-dark-peach rounded-md px-3 py-2 text-center text-white" htmlFor="media-image" onClick={removeImage}>change</label>
                                <Link className="" href={{ pathname: router.pathname, query: { ...query, fullscreen: true } }}>
                                    <div className="p-3 w-fit bg-dark-gray rounded-md shadow-md">
                                        <BsArrowsFullscreen className="text-white text-xl" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
                <div className="flex items-center gap-x-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-state">Meal Description</label>
                        <textarea required
                            id="message"
                            rows={3}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-dark-peach focus:outline-none"
                            name="description"
                            onChange={handleChange}
                            value={mealData.description}
                            placeholder="description of meal..."></textarea>
                    </div>
                    <button className="self-ed p-4 bg-dark-peach text-white text-sm rounded-full shadow-md"> <FaPlus className="text-white text-xl" /> </button>
                </div>
            </div>
        </form>
    )
}

export default NewMealForm;