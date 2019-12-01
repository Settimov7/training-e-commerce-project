import { createSelector } from 'reselect';

import {State} from '../types';
import {User, UserState} from './user.types';

const selectUser = (state: State): UserState => state.user;

export const selectCurrentUser = createSelector<State, UserState, User | null>(
  [selectUser],
    (user) => user.currentUser,
);