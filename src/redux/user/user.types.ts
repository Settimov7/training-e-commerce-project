import {UserActionTypes} from './user.action-types';

export type UserState = {
    currentUser: User | null,
};

export type User = {
    id: string,
    displayName: string,
    email: string,
    createdAt: Date,
}

export type UserAction = SetCurrentUserAction;

export type SetCurrentUserAction = {
    type:  typeof UserActionTypes.SET_CURRENT_USER,
    payload: User | null
}
