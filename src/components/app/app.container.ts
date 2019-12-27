import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {App} from './app.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';

import {AppState} from '../../redux/types';
import {User} from '../../redux/user/user.types';

type OwnProps = {};

type StateProps = {
    currentUser: User | null
};

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
});

export const AppContainer = connect<StateProps, null, OwnProps, AppState>(mapStateToProps)(App);
