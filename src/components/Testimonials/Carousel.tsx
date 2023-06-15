import Testimonial from "./Testimonial";


const Carousel = () => {

    return (
        <div className="bg- py-12">
            <div className="container">
                <h1 className="text-dark-blue text-5xl sm:text-3xl sm:text-center md:ml-5 mb-16">What people say</h1>
                <div className=" ">
                    <Testimonial />
                </div>
            </div>
        </div>
    )
}

export default Carousel;

// "grayish-white": "#D9E2EC",