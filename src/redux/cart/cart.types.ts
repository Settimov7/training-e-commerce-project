import {CartActionTypes} from './cart.action-types';
import {CartItems, CollectionItem} from '../../types';

export type CartState = {
    hidden: boolean,
    cartItems: CartItems,
};

export type CartAction = ToggleCartHiddenAction | AddItemAction;

export type ToggleCartHiddenAction = {
    type: typeof CartActionTypes.TOGGLE_CART_HIDDEN,
}

export type AddItemAction = {
    type: typeof CartActionTypes.ADD_ITEM,
    payload: CollectionItem;
}
