import {ShopAction, ShopState} from './shop.types';
import {ShopActionTypes} from './shop.actions-types';

const INITIAL_STATE: ShopState = {
    collections: null,
    isFetching: false,
};

export const shopReducer = (state: ShopState = INITIAL_STATE, action: ShopAction) => {
  switch (action.type) {
      case ShopActionTypes.FETCH_COLLECTIONS_START:
          return {
              ...state,
              isFetching: true,
          };

      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
          return {
              ...state,
              isFetching: false,
              collections: action.payload,
          };

      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
          return {
              ...state,
              isFetching: false,
              errorMessage: action.payload,
          };

      default:
          return state;
  }
};
