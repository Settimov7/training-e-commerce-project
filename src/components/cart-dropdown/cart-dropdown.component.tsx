import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import {CustomButton} from '../custom-button/custom-button.component';
import {CartItem} from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import {CartItems} from '../../types';
import {State} from '../../redux/types';

import './cart-dropdown.styles.scss';

const CartDropdownView: React.FC<RouteComponentProps & Props> = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>

        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

type OwnProps = {};

type StateProps = {
    cartItems: CartItems,
};

type DispatchProps = {};

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, OwnProps, StateProps>({
    cartItems: selectCartItems,
});

export const CartDropdown = withRouter(connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps)(CartDropdownView));
