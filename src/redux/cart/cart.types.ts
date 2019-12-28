import {CartActionTypes} from './cart.action-types';
import {CartItems, CollectionItem} from '../../types';

export type CartState = {
    hidden: boolean,
    cartItems: CartItems,
};

export type CartAction =
    ToggleCartHiddenAction
    | AddItemAction
    | RemoveItemAction
    | ClearItemFromCartAction
    | ClearCart;

export type ToggleCartHiddenAction = {
    type: typeof CartActionTypes.TOGGLE_CART_HIDDEN,
}

export type AddItemAction = {
    type: typeof CartActionTypes.ADD_ITEM,
    payload: CollectionItem;
}

export type RemoveItemAction = {
    type: typeof CartActionTypes.REMOVE_ITEM,
    payload: CollectionItem;
};

export type ClearItemFromCartAction = {
    type: typeof CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: CollectionItem;
}

export type ClearCart = {
    type: typeof CartActionTypes.CLEAR_CART,
};
