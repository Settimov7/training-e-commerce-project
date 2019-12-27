import {UserActionTypes} from './user.action-types';

export type UserState = {
    currentUser: User | null,
    error: Error | null,
};

export type User = {
    id: string,
    displayName: string,
    email: string,
    createdAt: Date,
}

export type UserAction =
    GoogleSignInStartAction
    | EmailSignInStartAction
    | SignInSuccessAction
    | SignInFailureAction;

export type GoogleSignInStartAction = {
    type: typeof UserActionTypes.GOOGLE_SIGN_IN_START,
};

export type EmailSignInStartAction = {
    type: typeof UserActionTypes.EMAIL_SIGN_IN_START,
    payload: {
        email: string,
        password: string,
    },
};

export type SignInSuccessAction = {
    type: typeof UserActionTypes.SIGN_IN_SUCCESS,
    payload: User,
};

export type SignInFailureAction = {
    type: typeof UserActionTypes.SIGN_IN_FAILURE,
    payload: Error,
};

export type CheckUserSessionAction = {
    type: typeof UserActionTypes.CHECK_USER_SESSION,
};
