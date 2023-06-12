import { MdRestaurantMenu } from "react-icons/md";

interface captionProps {
    header: string;
    note: string;
    bgImageClass: string
}


const MealCaption = ({ header, note, bgImageClass }: captionProps) => {

    return (
        <div className="relative w-full h-[28rem] sm:h-[37rem]">
            <div className={`absolute blur-background ${bgImageClass} w-full h-full`}></div>
            <div className="container flex flex-col text-center justify-center w-4/5 h-full">
                <h1 className="text-6xl text-white mb-5">{header}</h1>
                <p className="text-lg text-white">{note}</p>
                <button className="bg-transparent border-2 border-solid border-white-300 flex gap-x-2 text-white py-2 px-7 w-fit self-center mt-5">
                    <MdRestaurantMenu style={{ color: "#fff", fontSize: "25px" }} />
                    <span>Menu</span>
                </button>
            </div>
        </div>
    )
}

export default MealCaption;