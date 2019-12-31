import {takeLatest, put, all, call} from 'redux-saga/effects';

import {clearCart} from './cart.actions';

import {UserActionTypes} from '../user/user.action-types';

function* clearCartOnSignIn() {
    yield put(clearCart())
}

function* onClearCart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignIn);
}

export function* cartSagas() {
    yield all([
        call(onClearCart),
    ])
}