import {createSelector} from 'reselect';

import {State} from '../types';
import {Collection, Collections, ShopState} from './shop.types';

const selectShop = (state: State): ShopState => state.shop;

export const selectCollections = createSelector<State, ShopState, Collections | null>(
  [selectShop],
    (shop) => shop.collections,
);

export const selectCollectionsAsArray = createSelector<State, Collections | null, ReadonlyArray<Collection>>(
    [selectCollections],
    (collections) => collections ? Object.values(collections) : [],
);

export const selectCollection = (collectionUrlParam: string) => createSelector<State, Collections | null, Collection | null>(
    [selectCollections],
    (collections) => collections && collections[collectionUrlParam],
);