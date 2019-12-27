import {takeLatest, put, all, call} from 'redux-saga/effects';
import {User} from 'firebase';

import {signInFailure, signInSuccess} from './user.actions';

import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';

import {UserActionTypes} from './user.action-types';
import {DocumentReference, DocumentSnapshot, UserCredential} from '../../firebase/firebase.types';
import {EmailSignInStartAction} from './user.types';

function* getSnapshotFromUserAuth(userAuth: User) {
    try {
        const userRef: DocumentReference | undefined = yield call(createUserProfileDocument, userAuth);
        const userSnapshot: DocumentSnapshot | undefined = yield userRef && userRef.get();
        const userData = userSnapshot && userSnapshot.data();

        if (userSnapshot && userData) {
            const {displayName, email, createdAt} = userData;

            yield put(signInSuccess({
                id: userSnapshot.id,
                displayName,
                email,
                createdAt: createdAt.toDate(),
            }))
        }
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogle() {
    try {
        const {user}: UserCredential = yield auth.signInWithPopup(googleProvider);

        yield user && getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithEmail({payload}: EmailSignInStartAction) {
    try {
        const {email, password} = payload;
        const {user}: UserCredential = yield auth.signInWithEmailAndPassword(email, password);

        yield user && getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* checkUserSession() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) {
            return null;
        }

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
    ]);
}