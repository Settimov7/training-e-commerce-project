import React from 'react';
import StripeCheckout, {Token} from 'react-stripe-checkout';
import axios from 'axios';

type Props = {
    price: number;
}

export const StripeCheckoutButton: React.FC<Props> = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_JsWV6JhlJbZX4I6kk5L8eZvP00D75YSLHa';
    const onToken = (token: Token): void => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        }).then(() => {
            alert('Payment successful');
        }).catch((error) => {
            console.log('Payment error: ', JSON.parse(error));

            alert('There was an issue with your payment. Please sure you use the provided credit card.');
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
