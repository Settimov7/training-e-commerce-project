import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {CartIcon} from './cart-icon.component';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {AppState} from '../../redux/types';

type OwnProps = {};

type StateProps = {
    itemCount: number,
};

type DispatchProps = {
    toggleCartHidden: typeof toggleCartHidden,
}

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    toggleCartHidden,
});

export const CartIconContainer = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(CartIcon);
