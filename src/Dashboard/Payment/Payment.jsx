import React from 'react';
import useClass from '../../Hooks/useClass';
import CheckoutForm from './CheckoutForm';
import  './CheckoutForm.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id}=useParams();
    const {selectedClasses}=useClass();
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
    const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full pl-4'>
           
            <h1>payment</h1>
          <p>{selectedClasses.price}</p>

            <Elements stripe={stripePromise}>
                <CheckoutForm id={id} selectedClasses={selectedClasses} price={price} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;