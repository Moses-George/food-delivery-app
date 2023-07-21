import { Fragment } from "react";
import CartItem from "@src/components/Cart/CartItem";
import { PropsWithChildren } from "react";
import { BsFillCartFill } from "react-icons/bs";


const CartLayout = ({ children }: PropsWithChildren) => {

    return (
        <section className="px-8 sm:container gap-y-7 mb-40 grid grid-cols-[6fr_4fr] sm:grid-cols-1 md:grid-cols-1 mt-28 sm:mt-24 gap-x-3">
            {/* <div className="h-full"> */}
                {/* <div className="flex gap-x-4 items-center pb-8">
                    <h1 className="text-4xl sm:text-3xl text-dark-gray self-center">My Cart</h1>
                    <BsFillCartFill className="text-dark-gray self-end sm:self-center" style={{fontSize:"22px"}} /> 
                </div> */}
                <div className="shadow-lg bg-white rounded-md h-full w-full pb-5 px-5">
                    <div className="py-8">
                        <span className="text-3xl font-bold text-dark-gray">Menu</span>
                        <span className="ml-2 text-lg font-semibold text-grayish-blue">4 meals</span>
                    </div>
                    <div className="justify-self-start grid gap-y-4 scroller max-h-[35rem]" style={{whiteSpace: "normal"}}>
                        {[1, 2, 3, 4,5,6,7,8].map(cart => <CartItem key={cart} />)}
                    </div>
                    <div className="px-4 py-8 flex justify-between">
                        <h1 className="text-2xl text-dark-gray font-semibold">Sub Total</h1>
                        <h1 className="text-2xl text-dark-gray font-bold">$500.00</h1>
                    </div>
                </div>
            {/* </div> */}
            <Fragment >{children}</Fragment>
        </section>
    )
}

export default CartLayout;