import {connect, MapStateToProps} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {ComponentType} from 'react';
import {compose} from 'redux';

import {CollectionPage} from './collection-page.component';

import {WithSpinner, WithSpinnerProps} from '../../components/with-spinner/with-spinner.components';

import {selectCollection, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import {MatchParams} from '../shop/shop.types';
import {Collection} from '../../redux/shop/shop.types';
import {AppState} from '../../redux/types';

type OwnProps = RouteComponentProps<MatchParams>;

type StateProps = {
    collection: Collection | null,
    isLoading: boolean;
};

type ConnectProps = OwnProps & StateProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    isLoading: !selectIsCollectionsLoaded(state),
});

export const CollectionPageContainer = compose<ComponentType<Omit<ConnectProps, keyof WithSpinnerProps>>>(
    connect<StateProps, null, OwnProps, AppState>(mapStateToProps),
    WithSpinner,
)(CollectionPage);