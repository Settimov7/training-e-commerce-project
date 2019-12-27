import firebase from 'firebase/app';
import {call, put, takeLatest} from 'redux-saga/effects';

import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.actions';

import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {ShopActionTypes} from './shop.actions-types';
import {Collections} from './shop.types';

type QuerySnapshot = firebase.firestore.QuerySnapshot;

export function* fetchCollectionsAsync() {
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
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}