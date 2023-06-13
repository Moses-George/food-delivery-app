import CartLayout from "@src/components/Layout/CartLayout/CartLayout"


const Checkout = () => {

    return (
        <CartLayout>
            <div className="justify-self-end border-2 h-full w-full px-10 sm:row-start-1 sm:row-end-2 md:row-start-1 md:row-end-2">
                <h1 className="text-5xl">Checkout page</h1>
            </div>
        </CartLayout>
    )
}

export default Checkout;