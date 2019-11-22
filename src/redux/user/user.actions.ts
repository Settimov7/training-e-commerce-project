import {UserActionTypes} from './user.action-types';

import {SetCurrentUserAction, User} from './user.types';

export const setCurrentUser = (user: User | null): SetCurrentUserAction => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});
