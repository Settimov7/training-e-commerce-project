import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {CustomButton} from '../custom-button/custom-button.component';
import {CartItem} from '../cart-item/cart-item.component';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {CartItems} from '../../types';

import './cart-dropdown.styles.scss';

type Props = RouteComponentProps & {
    cartItems: CartItems,
    toggleCartHidden: typeof toggleCartHidden,
}

export const CartDropdown: React.FC<Props> = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>

        <CustomButton
            onClick={() => {
                toggleCartHidden();
                history.push('/checkout');
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);
