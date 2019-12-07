import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {PersistConfig} from 'redux-persist/es/types';

import {userReducer} from './user/user.reducer';
import {cartReducer} from './cart/cart.reducer';
import {directoryReducer} from './directory/directory.reducer';
import {shopReducer} from './shop/shop.reducer';

import {State} from './types';

const persistConfig: PersistConfig<State> = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

//TODO: Разобраться с ошибкой в типе Action в combineReducers

const reducer = combineReducers<State>({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export const rootReducer = persistReducer<State>(persistConfig, reducer);
