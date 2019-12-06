import {createSelector} from 'reselect';

import {State} from '../types';
import {DirectoryState, Sections} from './directory.types';

const selectDirectory = (state: State): DirectoryState => state.directory;

export const selectSections = createSelector<State, DirectoryState, Sections>(
    [selectDirectory],
    (directory) => directory.sections,
);