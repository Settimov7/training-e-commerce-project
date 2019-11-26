import {ToggleCartHiddenAction} from './cart.types';
import {CartActionTypes} from "./cart.action-types";


export const toggleCartHidden = (): ToggleCartHiddenAction => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
