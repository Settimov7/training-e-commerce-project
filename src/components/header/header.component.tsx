import React from 'react';
import {DispatchProp} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {CartIconContainer} from '../cart-icon/cart-icon.container';
import {CartDropdownContainer} from '../cart-dropdown/cart-dropdown.container';

import {auth} from '../../firebase/firebase.utils';
import {User} from '../../redux/user/user.types';

type Props = DispatchProp & {
    currentUser: User | null,
    hidden: boolean,
};

export const Header: React.FC<Props> = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
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

            <CartIconContainer />
        </OptionsContainer>

        {hidden || <CartDropdownContainer />}
    </HeaderContainer>
);
