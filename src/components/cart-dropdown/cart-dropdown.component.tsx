import React from 'react';
import {connect, MapStateToProps} from 'react-redux';

import {CustomButton} from '../custom-button/custom-button.component';
import {CartItem} from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import {CartItems} from '../../types';
import {State} from '../../redux/types';

import './cart-dropdown.styles.scss';

const CartDropdownView: React.FC<Props> = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

type OwnProps = {};

type StateProps = {
    cartItems: CartItems,
};

type Props = OwnProps & StateProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (state) => ({
    cartItems: selectCartItems(state),
});

export const CartDropdown = connect<StateProps, null, OwnProps, State>(mapStateToProps)(CartDropdownView);
