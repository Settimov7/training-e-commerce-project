import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {CartIconContainer} from '../cart-icon/cart-icon.container';
import {CartDropdownContainer} from '../cart-dropdown/cart-dropdown.container';

import {signOutStart} from '../../redux/user/user.actions';

import {User} from '../../redux/user/user.types';

type Props = {
    currentUser: User | null,
    hidden: boolean,
    signOutStart: typeof signOutStart,
};

export const Header: React.FC<Props> = ({currentUser, hidden, signOutStart}) => (
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
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/sign-in'>SIGN IN</OptionLink>
            }

            <CartIconContainer />
        </OptionsContainer>

        {hidden || <CartDropdownContainer />}
    </HeaderContainer>
);
