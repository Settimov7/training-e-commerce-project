import {createSelector} from 'reselect';

import {State} from '../types';
import {Collection, Collections, ShopState} from './shop.types';

const selectShop = (state: State): ShopState => state.shop;

export const selectCollections = createSelector<State, ShopState, Collections>(
  [selectShop],
    (shop) => shop.collections,
);

export const selectCollectionsAsArray = createSelector<State, Collections, ReadonlyArray<Collection>>(
    [selectCollections],
    (collections) => Object.values(collections),
);

export const selectCollection = (collectionUrlParam: string) => createSelector<State, Collections, Collection | undefined>(
    [selectCollections],
    (collections) => collections[collectionUrlParam],
);