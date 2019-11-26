import {combineReducers} from 'redux';

import {userReducer} from './user/user.reducer';
import {cartReducer} from './cart/cart.reducer';

import {State} from './types';

//TODO: Разобраться с ошибкой в combineReducers

export const rootReducer = combineReducers<State>({
    user: userReducer,
    cart: cartReducer,
});
