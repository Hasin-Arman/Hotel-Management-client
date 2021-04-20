import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCard from './SimpleCard';


const stripePromise = loadStripe('pk_test_51IeChHI4RCBAlLFuQveC1tSgcozaH1MmhSJow48ikHhJVUaeIibO8L3ZjyAGP60m6Y0sNhA3HSixkbtUYHRhf2ZH00Uz23lU3u');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCard></SimpleCard>
        </Elements>
    );
};

export default ProcessPayment;