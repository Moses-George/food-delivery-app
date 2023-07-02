import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Testimonial from "./Testimonial"; 
import { Testimonials } from "@src/utils/testimonial/data";


const Carousel = () => {


    return (
        <div className=" py-12">
            <div className="container wrapper">
                <h1 className="text-dark-blue text-5xl sm:text-3xl sm:text-center md:ml-5 mb-16">What people say</h1>
                <Splide options={{
                    perPage: 1,
                    height: 'fit-content',
                    width: 'fit-content',
                    rewind: true,
                    keyboard: 'global',
                    perMove: 1,
                    focus: "center",
                    type: 'slide',
                    easing: "ease",
                    gap: '1rem',
                    // padding: "4rem"
                    // arrows: ""
                }}
                    onMoved={(splide, newIndex) => {
                        console.log('moved', newIndex);
                        console.log('length', splide.length)
                    }}
                >
                    {Testimonials.map(testimonial => <Testimonial key={testimonial.id} id={testimonial.id} testifier={testimonial.testifier} statement={testimonial.statement} imageSrc={testimonial.imageSrc} />)}
                </Splide>
            </div>
        </div >
    )
}

export default Carousel;

// "grayish-white": "#D9E2EC",