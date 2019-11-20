import {UserActionTypes} from './user.contants';

import {UserAction, UserState} from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.SetCurrentUser:
            return {
                ...state,
                currentUser: action.payload,
            };

        default:
            return state;
    }
};
