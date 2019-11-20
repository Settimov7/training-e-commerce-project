import {combineReducers} from 'redux';

import {userReducer} from './user/user.reducer';

import {Action, State} from './types';

export const rootReducer = combineReducers<State, Action>({
    user: userReducer,
});
