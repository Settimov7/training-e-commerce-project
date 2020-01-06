import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {RouteComponentProps} from 'react-router';

import {CheckoutPage} from './checkout-page.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import {CartItems} from '../../types';
import {AppState} from '../../redux/types';

type OwnProps = RouteComponentProps;

type StateProps = {
    cartItems: CartItems,
    total: number,
};

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect<StateProps, null, OwnProps, AppState>(mapStateToProps)(CheckoutPage);