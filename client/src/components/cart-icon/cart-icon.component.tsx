import React from 'react';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

type Props = {
    itemCount: number,
    toggleCartHidden: typeof toggleCartHidden,
};

export const CartIcon: React.FC<Props> = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>

        <span className='item-count'>{itemCount}</span>
    </div>
);
