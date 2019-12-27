import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Header} from './header.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {signOutStart} from '../../redux/user/user.actions';

import {User} from '../../redux/user/user.types';
import {AppState} from '../../redux/types';

type OwnProps = {};

type StateProps = {
    currentUser: User | null,
    hidden: boolean,
};

type DispatchProps = {
    signOutStart: typeof signOutStart,
};

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
   signOutStart,
});

export const HeaderContainer = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(Header);