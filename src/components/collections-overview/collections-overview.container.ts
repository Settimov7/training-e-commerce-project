import {ComponentType} from 'react';
import {connect, DispatchProp} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {RouteComponentProps} from 'react-router';

import {CollectionsOverview} from './collections-overview.component';

import {WithSpinner} from '../with-spinner/with-spinner.component';

import {selectCollectionsAsArray, selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

import {AppState} from '../../redux/types';
import {Collection} from '../../redux/shop/shop.types';

type OwnProps = RouteComponentProps;

type StateProps = {
    isLoading: boolean,
    collections: ReadonlyArray<Collection>,
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
    isLoading: selectIsCollectionFetching,
    collections: selectCollectionsAsArray,
});

type ConnectProps = OwnProps & StateProps & DispatchProp;
type WithSpinnerResult = ComponentType<ConnectProps>;
type ConnectWrappedComponent = ComponentType<ConnectProps>;
type ComposeResult = ComponentType<RouteComponentProps>;

export const CollectionOverviewContainer = compose<WithSpinnerResult, ConnectWrappedComponent, ComposeResult>(
    connect<StateProps, null, OwnProps, AppState>(mapStateToProps),
    WithSpinner,
)(CollectionsOverview);
