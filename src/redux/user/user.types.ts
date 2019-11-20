import {UserActionTypes} from './user.contants';

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
    type:  typeof UserActionTypes.SetCurrentUser,
    payload: User
}
