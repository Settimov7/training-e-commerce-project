import { createSelector } from 'reselect';

import {State} from '../types';
import {CartState} from './cart.types';
import {CartItems} from '../../types';

const selectCart = (state: State) => state.cart;

export const selectCartItems = createSelector<State, CartState, CartItems>(
    selectCart,
    (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector<State, CartItems, number>(
    [selectCartItems],
    (items) => items.reduce((count, item) => count + item.quantity, 0),
);