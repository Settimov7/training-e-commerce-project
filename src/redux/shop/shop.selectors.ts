import {createSelector} from 'reselect';

import {COLLECTION_ID_MAP} from './shop.constants';

import {State} from '../types';
import {Collection, Collections, ShopState} from './shop.types';

const selectShop = (state: State): ShopState => state.shop;

export const selectCollections = createSelector<State, ShopState, Collections>(
  [selectShop],
    (shop) => shop.collections,
);

export const selectCollection = (collectionUrlParam: string) => createSelector<State, Collections, Collection | undefined>(
    [selectCollections],
    (collections) => collections.find(({id}) => id === COLLECTION_ID_MAP[collectionUrlParam]),
);