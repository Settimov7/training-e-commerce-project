import {createSelector} from 'reselect';

import {AppState} from '../types';
import {Collection, Collections, ShopState} from './shop.types';

const selectShop = (state: AppState): ShopState => state.shop;

export const selectCollections = createSelector<AppState, ShopState, Collections | null>(
  [selectShop],
    (shop) => shop.collections,
);

export const selectCollectionsAsArray = createSelector<AppState, Collections | null, ReadonlyArray<Collection>>(
    [selectCollections],
    (collections) => collections ? Object.values(collections) : [],
);

export const selectCollection = (collectionUrlParam: string) => createSelector<AppState, Collections | null, Collection | null>(
    [selectCollections],
    (collections) => collections && collections[collectionUrlParam],
);
