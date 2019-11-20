import {UserAction, UserState} from './user/user.types';

export type State = {
    user: UserState,
}

export type Action = UserAction
