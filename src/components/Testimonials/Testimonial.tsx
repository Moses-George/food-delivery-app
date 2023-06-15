

const Testimonial = () => {

    return (
        <div className="flex sm:flex-col-reverse items-center  gap-x-5 mb-4 w-2/3 md:w-4/5 sm:w-full sm:px-5 mx-auto">
            <div className="flex-none flex flex-col items-center space-y-5 ml-4">
                <img src="/people/person-1.png" alt="" className="rounded-full w-20 h-20" />
                <p className="text-xl font-bold text-grayish-blue">Yara Shahidi</p>
            </div>
            <div className=" flex bg-lightest-peach text-white h-60 p-2 rounded-lg shadow-md mb-2 relative">
                <div className="self-center p-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae eius modi rerum! Nesciunt iusto rerum tenetur fugiat minima incidunt necessitatibus impedit culpa autem amet, optio facilis, iure veabab</div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-12 sm:w-8 h-12 sm:h-8 bg-lightest-peach"></div>
            </div>
        </div>
    )
}

export default Testimonial;