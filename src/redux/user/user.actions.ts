import {UserActionTypes} from './user.contants';

import {SetCurrentUserAction, User} from './user.types';

export const setCurrentUser = (user: User | null): SetCurrentUserAction => ({
    type: UserActionTypes.SetCurrentUser,
    payload: user,
});
