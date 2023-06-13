import { Fragment } from "react";
import CartItem from "@src/components/Cart/CartItem";
import { PropsWithChildren } from "react";


const CartLayout = ({ children }: PropsWithChildren) => {

    return (
        <section className="px-16 sm:container gap-y-7 pb-20 grid grid-cols-[6.5fr_3.5fr] sm:grid-cols-1 md:grid-cols-1 gap-x-24 mt-10">
            <div className=" border-2 rounded-md h-full w-full pb-5 px-4">
                <div className="py-5">
                    <span className="text-3xl font-bold text-dark-gray">Menu</span>
                    <span className="ml-2 text-lg font-semibold text-grayish-blue">4 meals</span>
                </div>
                <div className="justify-self-start grid gap-y-4">
                    {[1, 2, 3, 4].map(cart => <CartItem key={cart} />)}
                </div>
            </div>
            <Fragment >{children}</Fragment> 
        </section>
    )
}

export default CartLayout;