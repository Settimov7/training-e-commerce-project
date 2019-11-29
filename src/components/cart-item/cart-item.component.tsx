import React from 'react';

import {CartItem as CartItemType} from '../../types';

import './cart-item.styles.scss';

type Props = {
  item: CartItemType
};

export const CartItem: React.FC<Props> = ({item}) => {
    const { imageUrl, name, price, quantity } = item;

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name} />

            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
};
