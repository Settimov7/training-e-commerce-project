import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';

import {CartItem} from '../../types';
import {AppState} from '../../redux/types';

import './checkout-item.styles.scss';

const CheckoutItemView: React.FC<Props> = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={() => addItem(cartItem)}>&#10095;</span>
            </span>
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
    removeItem: typeof removeItem,
    addItem: typeof addItem,
};

type Props = OwnProps & StateProps & DispatchProps;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    clearItemFromCart,
    removeItem,
    addItem,
});

export const CheckoutItem = connect<StateProps, DispatchProps, OwnProps, AppState>(null, mapDispatchToProps)(CheckoutItemView);
