import {RouteComponentProps, withRouter} from 'react-router-dom';
import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { compose } from 'redux';
import {ComponentType} from 'react';

import {CartDropdown} from './cart-dropdown.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {AppState} from '../../redux/types';
import {CartItems} from '../../types';

export type OwnProps = RouteComponentProps;

export type StateProps = {
    cartItems: CartItems,
};

export type DispatchProps = {
    toggleCartHidden: typeof toggleCartHidden,
};

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    cartItems: selectCartItems,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    toggleCartHidden,
});

export const CartDropdownContainer = compose<ComponentType>(
    withRouter,
    connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps),
)(CartDropdown);
