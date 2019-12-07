import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {CollectionPreview} from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/shop/shop.selectors';

import {Collections} from '../../redux/shop/shop.types';
import {State} from "../../redux/types";

const ShopPageView: React.FC<Props> = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, title, items}) => (
                <CollectionPreview key={id} title={title} items={items}/>
            ))
        }
    </div>
);

type OwnProps = {};

type StateProps = {
  collections: Collections,
};

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, StateProps>({
    collections: selectCollections,
});

export const ShopPage = connect(mapStateToProps)(ShopPageView);

