import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    return (
        <div>
            
        </div>
    );
};

export default Payment;