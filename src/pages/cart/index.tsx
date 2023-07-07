import CartLayout from "@src/components/Layout/CartLayout/CartLayout"
import Map from "@src/components/Map/Map"
import { hasToken } from "@src/middleware/authCheck";
import { GetServerSideProps, NextApiRequest } from "next";


const Cart = () => {

    return (
        <CartLayout>
            <Map />
        </CartLayout>
    )
}

export default Cart;

export const  getServerSideProps: GetServerSideProps = async (context) => {

    const token = await hasToken(context.req as NextApiRequest);
  
    if(!token){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
  
    return { props: {}}
  }