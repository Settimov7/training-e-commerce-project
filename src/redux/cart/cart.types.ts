import {CartActionTypes} from './cart.action-types';

export type CartState = {
    hidden: boolean,
};

export type CartAction = ToggleCartHiddenAction;

export type ToggleCartHiddenAction = {
    type: typeof CartActionTypes.TOGGLE_CART_HIDDEN,
}
