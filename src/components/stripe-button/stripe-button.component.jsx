import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HTRCgKNWQiZIQaihjaIAC0chVwM223aSj0NbjdEHS3bZlr7dREtIdRSAn1csZhCIYwadulFCUZrvcXrU4Kzwjhu00ZMxHr9UE';
    
    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            despription={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;