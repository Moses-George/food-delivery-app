import { FaCheckCircle} from "react-icons/fa";
import { optionProps } from "@src/utils/interfaces/propsInterfaces";



const Option = ({ checked, onChange, name, icon }: optionProps) => {

    return (
        <div className={`relative flex justify-between items-center w-full h-28 px-3 py-2 shadow-sm border-2 ${checked && "border-dark-peach"} rounded-md`}>
            {checked && <FaCheckCircle className="absolute right-2 top-1 text-dark-gray text-4xl" />}
            <div className="flex items-center space-x-2">
                <input
                    id={name}
                    type="radio"
                    onChange={onChange}
                    checked={checked}
                    name={name}
                    className="-ml-30 w-3 h-3"
                />
                <h1 className="text-xl font-semibold text-dark-gray justify-start px-0">{name}</h1>
            </div>
            {icon}
        </div>
    )
}

export default Option;