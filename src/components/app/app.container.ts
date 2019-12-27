import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {App} from './app.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';

import { checkUserSession} from '../../redux/user/user.actions';

import {AppState} from '../../redux/types';
import {User} from '../../redux/user/user.types';

type OwnProps = {};

type StateProps = {
    currentUser: User | null
};

type DispatchToProps = {
    checkUserSession: typeof checkUserSession,
};

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, OwnProps> = ({
   checkUserSession,
});

export const AppContainer = connect<StateProps, DispatchToProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(App);
