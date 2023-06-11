import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
//import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
import CheckoutForm from './CheckoutForm/CheckoutForm';
//TODO:provide publishable key
const stripePromise =loadStripe(import.meta.env.VITE_payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};


export default Payment;