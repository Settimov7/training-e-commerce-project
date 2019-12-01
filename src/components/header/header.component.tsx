import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {CartIcon} from '../cart-icon/cart-icon.component';
import {CartDropdown} from '../cart-dropdown/cart-dropdown.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {auth} from '../../firebase/firebase.utils';

import {State} from '../../redux/types';
import {User} from '../../redux/user/user.types';

import './header.styles.scss';

const HeaderView: React.FC<Props> = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/shop'>
                CONTACT
            </Link>

            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/sign-in'>SIGN IN</Link>
            }

            <CartIcon />
        </div>

        {hidden || <CartDropdown/>}
    </div>
);

type OwnProps = {};

type StateProps = {
    currentUser: User | null,
    hidden: boolean,
};

type DispatchProps = {};

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export const Header = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps)(HeaderView);
