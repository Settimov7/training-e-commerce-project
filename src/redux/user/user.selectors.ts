import { createSelector } from 'reselect';

import {AppState} from '../types';
import {User, UserState} from './user.types';

const selectUser = (state: AppState): UserState => state.user;

export const selectCurrentUser = createSelector<AppState, UserState, User | null>(
  [selectUser],
    (user) => user.currentUser,
);
