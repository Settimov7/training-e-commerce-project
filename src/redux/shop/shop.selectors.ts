import {createSelector} from 'reselect';

import {State} from '../types';
import {ShopState} from './shop.types';

const selectShop = (state: State): ShopState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
    (shop) => shop.collections,
);