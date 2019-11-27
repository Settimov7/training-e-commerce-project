import {AddItemAction, ToggleCartHiddenAction} from './cart.types';
import {CartActionTypes} from './cart.action-types';
import {CollectionItem} from '../../types';


export const toggleCartHidden = (): ToggleCartHiddenAction => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: CollectionItem): AddItemAction => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});
