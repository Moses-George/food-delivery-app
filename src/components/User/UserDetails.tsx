import { Greeting } from "@src/utils/Dates&Time/greetings";
import { MdAccountBox, MdLocationPin } from "react-icons/md"


const UserDetails = () => {

    const greeting = new Greeting();

    return (
        <div className="w-full h-full bg-[#ffe2da] justify-self-start rounded-lg col-start-1 col-end-3 sm:col-start-1 sm:col-end-4">
            <div className="flex items-center sm:flex-col">
                <MdAccountBox className="text-[10rem] text-dark-gray" />
                <div className="space-y-3">
                    <h1 className="text-3xl text-dark-gray">{greeting.greetUser("George")}</h1>
                    <div className="flex gap-x-2">
                        <MdLocationPin className="text-2xl text-dark-blue" />
                        <span className="text-md text-medium-gray">Berlin, Germany.</span>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-4">
                <h1 className="text-2xl text-dark-gray">Personal details</h1>
                <div className="space-y-1">
                    <p className="text-dark-gray font-semibold"> Phone</p>
                    <p className="text-dark-gray py-2 px-8 bg-lightest-peach w-fit rounded-lg">  xxx xxx xxx x </p>
                </div>
                <div className="space-y-1">
                    <p className="text-dark-gray font-semibold"> Email</p>
                    <p className="text-dark-gray py-2 px-8 bg-lightest-peach w-fit rounded-lg">  xxxx@gmail.com </p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;