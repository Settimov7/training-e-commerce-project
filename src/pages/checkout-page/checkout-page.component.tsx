import React from 'react';
import {DispatchProp} from 'react-redux';

import {CheckoutItemContainer} from '../../components/checkout-item/checkout-item.container';
import {StripeCheckoutButton} from '../../components/stripe-checkout-button/stripe-checkout-button.component';

import {CartItems} from '../../types';

import './checkout-page.styles.scss';

type Props = DispatchProp & {
    cartItems: CartItems,
    total: number,
};

export const CheckoutPage: React.FC<Props> = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>

            <div className='header-block'>
                <span>Quantity</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        { cartItems.map((item) => <CheckoutItemContainer key={item.id} cartItem={item} />)}

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>

        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>

        <StripeCheckoutButton price={total}/>
    </div>
);

