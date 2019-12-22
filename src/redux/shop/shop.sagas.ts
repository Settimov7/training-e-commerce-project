import firebase from 'firebase/app';
import {takeEvery, call, put} from 'redux-saga/effects';

import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.actions';

import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {ShopActionTypes} from './shop.actions-types';
import {Collections} from './shop.types';

type QuerySnapshot = firebase.firestore.QuerySnapshot;

export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot: QuerySnapshot = yield collectionRef.get();
        const collectionsMap: Collections = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}