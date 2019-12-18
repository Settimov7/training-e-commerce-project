import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {PersistConfig} from 'redux-persist/es/types';

import {userReducer} from './user/user.reducer';
import {cartReducer} from './cart/cart.reducer';
import {directoryReducer} from './directory/directory.reducer';
import {shopReducer} from './shop/shop.reducer';

import {AppState} from './types';

const persistConfig: PersistConfig<AppState> = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

//TODO: Разобраться с ошибкой в типе Action в combineReducers

const reducer = combineReducers<AppState>({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export const rootReducer = persistReducer<AppState>(persistConfig, reducer);
