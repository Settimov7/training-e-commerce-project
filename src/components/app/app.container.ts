import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {App} from './app.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';

import {setCurrentUser} from '../../redux/user/user.actions';

import {AppState} from '../../redux/types';
import {User} from '../../redux/user/user.types';

type OwnProps = {};

type StateProps = {
    currentUser: User | null
};

type DispatchProps = {
    setCurrentUser: typeof setCurrentUser,
}

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    setCurrentUser,
});

export const AppContainer = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps,mapDispatchToProps)(App);
