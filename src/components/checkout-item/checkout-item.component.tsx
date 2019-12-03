import React from 'react';

import {CartItem} from '../../types';

import './checkout-item.styles.scss';

type Props = {
  cartItem: CartItem,
};

export const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    );
};