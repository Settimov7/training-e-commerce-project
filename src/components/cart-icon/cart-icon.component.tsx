import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {AppState} from '../../redux/types';

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

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    toggleCartHidden,
});

export const CartIcon = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(CartIconView);
