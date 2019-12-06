import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {PersistConfig} from 'redux-persist/es/types';

import {userReducer} from './user/user.reducer';
import {cartReducer} from './cart/cart.reducer';

import {State} from './types';

const persistConfig: PersistConfig<State> = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

//TODO: Разобраться с ошибкой в combineReducers

const reducer = combineReducers<State>({
    user: userReducer,
    cart: cartReducer,
});

export const rootReducer = persistReducer<State>(persistConfig, reducer);
