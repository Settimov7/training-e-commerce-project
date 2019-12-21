import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Header} from './header.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {User} from '../../redux/user/user.types';
import {AppState} from '../../redux/types';

type OwnProps = {};

type StateProps = {
    currentUser: User | null,
    hidden: boolean,
};

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export const HeaderContainer = connect<StateProps, null, OwnProps, AppState>(mapStateToProps)(Header);