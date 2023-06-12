import { loadStripe } from "@stripe/stripe-js";
import useClass from "../../Hooks/useClass";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
const {id}=useParams();
    const [selectedClasses] = useClass();
    const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            
            <h2 className="text-3xl"> Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClasses={selectedClasses} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;