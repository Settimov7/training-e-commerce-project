import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import {CartItems} from '../../types';
import {State} from '../../redux/types';

import './checkout-page.styles.scss';

const CheckoutPageView: React.FC<Props> = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>

            <div className='header-block'>
                <span>Quantity</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        { cartItems.map((item) => item.name)}

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

type OwnProps = {};

type StateProps = {
    cartItems: CartItems,
    total: number,
};

type DispatchProps = {};

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, OwnProps, StateProps>({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export const CheckoutPage = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps)(CheckoutPageView);

