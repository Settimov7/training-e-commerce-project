import React from 'react';
import {Link} from 'react-router-dom';
import {connect, MapStateToProps} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {CartIcon} from '../cart-icon/cart-icon.component';
import {CartDropdown} from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../firebase/firebase.utils';

import {State} from '../../redux/types';
import {User} from '../../redux/user/user.types';

import './header.styles.scss';

type Props = {
    currentUser: User | null
};

const HeaderView: React.FC<Props> = ({currentUser}) => (
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

        <CartDropdown/>
    </div>
);

type StateProps = {
  currentUser: User | null,
};

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state) => ({
    currentUser: state.user.currentUser,
});

export const Header = connect(mapStateToProps)(HeaderView);
