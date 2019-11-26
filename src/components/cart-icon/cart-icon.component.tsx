import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIconView: React.FC<Props> = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

type OwnProps = {};

type DispatchProps = {
    toggleCartHidden: typeof toggleCartHidden,
}

type Props = OwnProps & DispatchProps;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    toggleCartHidden,
});

export const CartIcon = connect(null, mapDispatchToProps)(CartIconView);
