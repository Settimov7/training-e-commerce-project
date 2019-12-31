import {connect, MapDispatchToProps} from 'react-redux';

import {CheckoutItem} from './checkout-item.component';

import {addItem, clearItemFromCart, removeItem} from '../../redux/cart/cart.actions';

import {CartItem} from '../../types';

type OwnProps = {
    cartItem: CartItem,
};

type DispatchProps = {
    clearItemFromCart: typeof clearItemFromCart,
    removeItem: typeof removeItem,
    addItem: typeof addItem,
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    clearItemFromCart,
    removeItem,
    addItem,
});

export const CheckoutItemContainer = connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(CheckoutItem);
