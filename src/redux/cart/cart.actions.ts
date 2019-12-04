import {AddItemAction, ClearItemFromCartAction, RemoveItemAction, ToggleCartHiddenAction} from './cart.types';
import {CartActionTypes} from './cart.action-types';
import {CollectionItem} from '../../types';


export const toggleCartHidden = (): ToggleCartHiddenAction => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CollectionItem): AddItemAction => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const removeItem = (item: CollectionItem): RemoveItemAction => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const clearItemFromCart = (item: CollectionItem): ClearItemFromCartAction => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
});
