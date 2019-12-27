import {UserActionTypes} from './user.action-types';

import {
    GoogleSignInStartAction,
    EmailSignInStartAction,
    SignInFailureAction,
    SignInSuccessAction,
    User,
    CheckUserSessionAction,
    SignOutStartAction,
    SignOutSuccessAction,
    SignOutFailureAction
} from './user.types';

export const googleSignInStart = (): GoogleSignInStartAction => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (email: string, password: string): EmailSignInStartAction => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: {
        email,
        password,
    }
});

export const signInSuccess = (user: User): SignInSuccessAction => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error: Error): SignInFailureAction => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const checkUserSession = (): CheckUserSessionAction => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = (): SignOutStartAction => ({
    type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = (): SignOutSuccessAction => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: Error): SignOutFailureAction => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});
