import {UserActionTypes} from './user.action-types';

import {UserAction, UserState} from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };

        default:
            return state;
    }
};
