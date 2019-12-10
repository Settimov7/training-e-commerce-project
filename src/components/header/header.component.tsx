import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import {CartIcon} from '../cart-icon/cart-icon.component';
import {CartDropdown} from '../cart-dropdown/cart-dropdown.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {auth} from '../../firebase/firebase.utils';

import {State} from '../../redux/types';
import {User} from '../../redux/user/user.types';

const HeaderView: React.FC<Props> = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>

            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>

            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/sign-in'>SIGN IN</OptionLink>
            }

            <CartIcon />
        </OptionsContainer>

        {hidden || <CartDropdown/>}
    </HeaderContainer>
);

type OwnProps = {};

type StateProps = {
    currentUser: User | null,
    hidden: boolean,
};

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export const Header = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps)(HeaderView);
