import Image from "next/image";
import img1 from "@src/assets/images/bg/remove-3.png";
import img2 from "@src/assets/images/bg/remove-6.png";
import TextAnimation from "../TextAnimation/TextAnimation";


const IntroSection = () => {

    return (
        <div className="flex h-[33rem] bg-[#f7faff] w-full sm:flex-col sm:h-2/5 sm:pb-10 ">
            <div className="mobile-img hidden sm:block">
                <TextAnimation />
            </div>
            <Image src={img2} alt="img1" className="h-full -ml-24 self-center md:hidden sm:hidden" />
            <div className="self-center container max-w-3xl -ml-16 md:ml-0 sm:ml-0">
                <h1 className="py-2 sm:pt-10 text-7xl text-center text-dark-blue md:text-5xl sm:text-4xl leading-tight"><span className="text-dark-peach">Wake</span> Up Early, Eat Fresh and Healthy</h1>
                <p className="text-center text-lg text-medium-gray my-5">Aside from their natural  good taste and great crunchy texture alongside wonderful colors and fragrances, eating a large serving of fresh.</p>
            </div>
            <Image src={img1} alt="img2" className="h-5/6 -mr-20 self-center md:-mr-10 md:h-3/4 sm:h-4/5 sm:-mr-16" />
        </div>
    )
}

export default IntroSection;