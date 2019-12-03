import {CartAction, CartState} from './cart.types';

import {addItemToCart} from './cart.utils';

import {CartActionTypes} from './cart.action-types';

const INITIAL_STATE: CartState = {
    hidden: true,
    cartItems: [],
};


export const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction) => {
  switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
          return {
              ...state,
              hidden: !state.hidden,
          };

      case CartActionTypes.ADD_ITEM:
          return {
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload),
          };

      case CartActionTypes.CLEAR_ITEM_FROM_CART:
          return {
              ...state,
              cartItems: state.cartItems.filter(({ id }) => id !== action.payload.id),
          };

      default:
          return state;
  }
};
