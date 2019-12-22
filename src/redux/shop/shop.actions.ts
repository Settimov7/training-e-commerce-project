import {
    Collections,
    FetchCollectionsFailureAction,
    FetchCollectionsStartAction,
    FetchCollectionsSuccessAction,
} from './shop.types';
import {ShopActionTypes} from './shop.actions-types';

export const fetchCollectionsStart = (): FetchCollectionsStartAction => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: Collections): FetchCollectionsSuccessAction => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string): FetchCollectionsFailureAction => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});
