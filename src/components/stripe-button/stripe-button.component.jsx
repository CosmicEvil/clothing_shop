import React from "react";

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6MD3JEuR3c4AyG6YeQiOm2ToyyaMw4aTPnGJhGHzWSWY0SD50rgMxD7RKpmsDhpHcFakmvtewfCEDbguv3ppTS00j37Y8XM2';
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;