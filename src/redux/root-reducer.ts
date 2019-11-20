import {combineReducers} from 'redux';

import {userReducer} from './user/user.reducer';

import {Action, StoreState} from './types';

export const rootReducer = combineReducers<StoreState, Action>({
    user: userReducer,
});
