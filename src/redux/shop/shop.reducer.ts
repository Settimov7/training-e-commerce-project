import {SHOP_DATA} from './shop-data';

import {ShopAction, ShopState} from './shop.types';

const INITIAL_STATE: ShopState = {
    collections: SHOP_DATA,
};

export const shopReducer = (state: ShopState = INITIAL_STATE, action: ShopAction) => {
  switch (action.type) {
      default:
          return state;
  }
};