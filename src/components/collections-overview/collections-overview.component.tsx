import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {RouteComponentProps} from 'react-router';

import {CollectionPreview} from '../collection-preview/collection-preview.component';

import {selectCollectionsAsArray} from '../../redux/shop/shop.selectors';

import {AppState} from '../../redux/types';
import {Collection} from '../../redux/shop/shop.types';

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

type OwnProps = RouteComponentProps;

type StateProps = {
    collections: ReadonlyArray<Collection>,
}

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
    collections: selectCollectionsAsArray,
});

export const CollectionsOverview = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps)(CollectionsOverviewView);

