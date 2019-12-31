import {createSelector} from 'reselect';

import {AppState} from '../types';
import {CartState} from './cart.types';
import {CartItems} from '../../types';

const selectCart = (state: AppState): CartState => state.cart;

export const selectCartItems = createSelector<AppState, CartState, CartItems>(
    selectCart,
    (cart) => cart.cartItems,
);

export const selectCartHidden = createSelector<AppState, CartState, boolean>(
    [selectCart],
    (cart) => cart.hidden,
);

export const selectCartItemsCount = createSelector<AppState, CartItems, number>(
    [selectCartItems],
    (items) => items.reduce(
        (count, {quantity}) => count + quantity,
        0,
    ),
);

export const selectCartTotal = createSelector<AppState, CartItems, number>(
    [selectCartItems],
    (items) => items.reduce(
        (total, {price, quantity}) => total + price * quantity,
        0,
    ),
);
