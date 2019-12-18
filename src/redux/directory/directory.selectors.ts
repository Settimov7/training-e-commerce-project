import {createSelector} from 'reselect';

import {AppState} from '../types';
import {DirectoryState, Sections} from './directory.types';

const selectDirectory = (state: AppState): DirectoryState => state.directory;

export const selectSections = createSelector<AppState, DirectoryState, Sections>(
    [selectDirectory],
    (directory) => directory.sections,
);
