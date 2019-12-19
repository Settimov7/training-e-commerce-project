import {ThunkAction} from 'redux-thunk';

import {ShopActionTypes} from './shop.actions-types';

import {AppState} from '../types';

export type ShopState = {
    collections: Collections | null,
    isFetching: boolean,
    errorMessage?: string,
}

export type ShopAction = FetchCollectionsStartAction | FetchCollectionsSuccessAction | FetchCollectionsFailureAction;

export type FetchCollectionsStartAction = {
    type: typeof ShopActionTypes.FETCH_COLLECTIONS_START,
}

export type FetchCollectionsSuccessAction = {
    type: typeof ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: Collections,
}

export type FetchCollectionsFailureAction = {
    type: typeof ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: string,
}

type fetchCollectionsStartAsyncActions = FetchCollectionsStartAction | FetchCollectionsSuccessAction | FetchCollectionsFailureAction;

export type FetchCollectionsStartAsyncAction = ThunkAction<void, AppState, null, fetchCollectionsStartAsyncActions>

export type Collections = Record<string, Collection>;

export type Collection = {
    id: string | number,
    title: string,
    routeName: string,
    items: CollectionItems,
};

type CollectionItems = ReadonlyArray<CollectionItem>;

type CollectionItem = {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
}
