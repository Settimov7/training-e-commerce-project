import {UserAction, UserState} from './user/user.types';

export type StoreState = {
    user: UserState,
}

export type Action = UserAction
