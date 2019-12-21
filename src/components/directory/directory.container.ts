import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Directory} from './directory.component';

import {selectSections} from '../../redux/directory/directory.selectors';

import {AppState} from '../../redux/types';
import {Sections} from '../../redux/directory/directory.types';

type OwnProps = {};

type StateProps = {
    sections: Sections,
}

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    sections: selectSections,
});

export const DirectoryContainer = connect<StateProps, null, OwnProps, AppState>(mapStateToProps)(Directory);