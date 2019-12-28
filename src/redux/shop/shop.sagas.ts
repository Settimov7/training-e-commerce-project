import {call, put, takeLatest, all} from 'redux-saga/effects';

import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.actions';

import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {ShopActionTypes} from './shop.actions-types';
import {Collections} from './shop.types';
import {QuerySnapshot} from '../../firebase/firebase.types';

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot: QuerySnapshot = yield collectionRef.get();
        const collectionsMap: Collections = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart),
    ]);
}