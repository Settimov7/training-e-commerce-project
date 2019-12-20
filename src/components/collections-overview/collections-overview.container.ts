import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {RouteComponentProps} from 'react-router';

import {CollectionsOverview} from './collections-overview.component';

import {WithSpinner, WithSpinnerProps} from '../with-spinner/with-spinner.components';

import {selectCollectionsAsArray, selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

import {AppState} from '../../redux/types';
import {Collection} from '../../redux/shop/shop.types';

type OwnProps = RouteComponentProps;

type StateProps = {
    isLoading: boolean,
    collections: ReadonlyArray<Collection>,
};

type ConnectProps = OwnProps & StateProps;

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
    isLoading: selectIsCollectionFetching,
    collections: selectCollectionsAsArray,
});


//TODO: Поковырять типы compose на обычных фукциях
export const CollectionOverviewContainer = compose<React.ComponentType<Omit<ConnectProps, keyof WithSpinnerProps>>>(
    connect<StateProps, null, OwnProps, AppState>(mapStateToProps),
    WithSpinner,
)(CollectionsOverview);
