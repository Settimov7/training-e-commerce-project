import React from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {State} from '../../redux/types';

import './cart-icon.styles.scss';

const CartIconView: React.FC<Props> = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

type OwnProps = {};

type StateProps = {
    itemCount: number,
};

type DispatchProps = {
    toggleCartHidden: typeof toggleCartHidden,
}

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (state) => ({
    itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    toggleCartHidden,
});

export const CartIcon = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps, mapDispatchToProps)(CartIconView);
