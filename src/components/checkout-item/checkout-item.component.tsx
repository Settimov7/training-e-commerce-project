import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';

import {CartItem} from '../../types';
import {State} from '../../redux/types';

import './checkout-item.styles.scss';
import {clearItemFromCart} from "../../redux/cart/cart.actions";

const CheckoutItemView: React.FC<Props> = ({ cartItem, clearItemFromCart }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    );
};

type OwnProps = {
    cartItem: CartItem,
};

type StateProps = {};

type DispatchProps = {
    clearItemFromCart: typeof clearItemFromCart,
};

type Props = OwnProps & StateProps & DispatchProps;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    clearItemFromCart,
});

export const CheckoutItem = connect<StateProps, DispatchProps, OwnProps, State>(null, mapDispatchToProps)(CheckoutItemView);