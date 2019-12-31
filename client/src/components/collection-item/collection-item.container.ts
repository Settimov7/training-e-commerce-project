import {connect, MapDispatchToProps} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';

import {CollectionItem} from './collection-item.component';

import {CollectionItem as CollectionItemType} from '../../types';

type OwnProps = {
    item: CollectionItemType,
}

type DispatchProps = {
    addItem: typeof addItem,
}

export const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    addItem,
});

export const CollectionItemContainer = connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(CollectionItem);
