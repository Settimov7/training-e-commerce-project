import {connect, DispatchProp, MapStateToProps} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {ComponentType} from 'react';
import {compose} from 'redux';

import {CollectionPage} from './collection-page.component';

import {WithSpinner} from '../../components/with-spinner/with-spinner.component';

import {selectCollection, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import {MatchParams} from '../shop/shop.types';
import {Collection} from '../../redux/shop/shop.types';
import {AppState} from '../../redux/types';

type OwnProps = RouteComponentProps<MatchParams>;

type StateProps = {
    collection: Collection | null,
    isLoading: boolean;
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    isLoading: !selectIsCollectionsLoaded(state),
});

type ConnectProps = OwnProps & StateProps & DispatchProp;
type WithSpinnerResult = ComponentType<ConnectProps>;
type ConnectWrappedComponent = ComponentType<ConnectProps>;
type ComposeResult = ComponentType<RouteComponentProps<MatchParams>>;

export const CollectionPageContainer = compose<WithSpinnerResult, ConnectWrappedComponent, ComposeResult>(
    connect<StateProps, null, OwnProps, AppState>(mapStateToProps),
    WithSpinner,
)(CollectionPage);