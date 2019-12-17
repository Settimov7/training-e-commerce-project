import {SHOP_DATA} from './shop-data';

import {ShopAction, ShopState} from './shop.types';
import {ShopActionTypes} from './shop.actions-types';

const INITIAL_STATE: ShopState = {
    collections: SHOP_DATA,
};

export const shopReducer = (state: ShopState = INITIAL_STATE, action: ShopAction) => {
  switch (action.type) {
      case ShopActionTypes.UPDATE_COLLECTIONS:
          return {
              ...state,
              collections: action.payload,
          };

      default:
          return state;
  }
};