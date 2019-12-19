import React from 'react';
import {RouteComponentProps} from 'react-router';
import {Route} from 'react-router-dom';
import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
    CollectionsOverview,
    OwnProps as CollectionsOverviewProps
} from '../../components/collections-overview/collections-overview.component';
import {CollectionPage, OwnProps as CollectionPageProps} from '../collection-page/collection-page.component';

import {WithSpinner, WithSpinnerProps} from '../../components/with-spinner/with-spinner.components';

import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

import {AppState} from '../../redux/types';

const CollectionsOverviewWithSpinner = WithSpinner<CollectionsOverviewProps & WithSpinnerProps>(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner<CollectionPageProps & WithSpinnerProps>(CollectionPage);

class ShopPageView extends React.Component<Props> {
    componentDidMount(): void {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionsFetching, isCollectionsLoaded} = this.props;

        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={() => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} />}
                />

                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                />
            </div>
        );
    };
}

type OwnProps = RouteComponentProps;

type StateProps = {
    isCollectionsFetching: boolean,
    isCollectionsLoaded: boolean,
};


//TODO: Вроде норм, но кажется, что что-то не так
type DispatchProps = {
    fetchCollectionsStartAsync: () => void,
}

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    fetchCollectionsStartAsync,
});

export const ShopPage = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps, mapDispatchToProps)(ShopPageView);

