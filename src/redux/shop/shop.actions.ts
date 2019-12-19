import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {
    Collections,
    FetchCollectionsFailureAction,
    FetchCollectionsStartAction,
    FetchCollectionsStartAsyncAction,
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

export const fetchCollectionsStartAsync = (): FetchCollectionsStartAsyncAction => {
    return ((dispatch) => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get()
            .then((snapshot) => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
    })
};
