import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {CollectionPreview} from '../collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/shop/shop.selectors';

import {State} from '../../redux/types';
import {Collections} from '../../redux/shop/shop.types';

import './collections-overview.styles.scss';

const CollectionsOverviewView: React.FC<Props> = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, title, items}) => (
                <CollectionPreview key={id} title={title} items={items}/>
            ))
        }
    </div>
);

type OwnProps = {}

type StateProps = {
    collections: Collections,
}

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, StateProps>({
    collections: selectCollections,
});

export const CollectionsOverview = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps)(CollectionsOverviewView);

