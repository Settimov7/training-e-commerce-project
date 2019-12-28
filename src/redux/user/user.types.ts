import {User as FirebaseUser} from 'firebase';

import {UserActionTypes} from './user.action-types';
import {AdditionalInfo} from '../../firebase/firebase.types';

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

export type UserCredentials = {
    email: string,
    password: string,
    displayName: string,
};

export type UserAction =
    GoogleSignInStartAction
    | EmailSignInStartAction
    | SignInSuccessAction
    | SignInFailureAction
    | SignOutStartAction
    | SignOutSuccessAction
    | SignOutFailureAction
    | SignUpStartAction
    | SignUpSuccessAction
    | SignUpFailureAction;

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

export type SignOutStartAction = {
    type: typeof UserActionTypes.SIGN_OUT_START,
};

export type SignOutSuccessAction = {
    type: typeof UserActionTypes.SIGN_OUT_SUCCESS,
};

export type SignOutFailureAction = {
    type: typeof UserActionTypes.SIGN_OUT_FAILURE,
    payload: Error,
};

export type SignUpStartAction = {
    type: typeof UserActionTypes.SIGN_UP_START,
    payload: UserCredentials,
};

export type SignUpSuccessAction = {
    type: typeof UserActionTypes.SIGN_UP_SUCCESS,
    payload: {
        user: FirebaseUser,
        additionalInfo?: AdditionalInfo
    }
};

export type SignUpFailureAction = {
    type: typeof UserActionTypes.SIGN_UP_FAILURE,
    payload: Error,
};
