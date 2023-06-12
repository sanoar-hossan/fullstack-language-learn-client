import React from 'react';
import useClass from '../../Hooks/useClass';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const [selectedClasses]=useClass();
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
    return (
        <div>
            console.log({selectedClasses.length});
            <h1>payment</h1>
            <CheckoutForm></CheckoutForm>

            <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;