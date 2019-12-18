import React from 'react';
import {RouteComponentProps} from 'react-router';
import {Route} from 'react-router-dom';
import {Unsubscribe} from 'firebase';
import {connect, MapDispatchToProps} from 'react-redux';

import {
    CollectionsOverview,
    OwnProps as CollectionsOverviewProps
} from '../../components/collections-overview/collections-overview.component';
import {CollectionPage, OwnProps as CollectionPageProps} from '../collection-page/collection-page.component';

import {WithSpinner, WithSpinnerProps} from '../../components/with-spinner/with-spinner.components';

import {updateCollections} from '../../redux/shop/shop.actions';

import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {AppState} from '../../redux/types';

const CollectionsOverviewWithSpinner = WithSpinner<CollectionsOverviewProps & WithSpinnerProps>(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner<CollectionPageProps & WithSpinnerProps>(CollectionPage);

type State = {
    loading: boolean,
}

class ShopPageView extends React.Component<Props, State> {
    unsubscribeFromSnapshot: Unsubscribe | null;

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: true,
        };

        this.unsubscribeFromSnapshot = null;
    }

    componentDidMount(): void {
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

    }

    componentWillUnmount(): void {
        this.unsubscribeFromSnapshot && this.unsubscribeFromSnapshot();
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;

        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={() => <CollectionsOverviewWithSpinner isLoading={loading} />}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        );
    };
}

type OwnProps = RouteComponentProps;

type StateProps = {};

type DispatchProps = {
    updateCollections: typeof updateCollections,
}

type Props = OwnProps & StateProps & DispatchProps;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    updateCollections,
});

export const ShopPage = connect<StateProps, DispatchProps, OwnProps, AppState>(null, mapDispatchToProps)(ShopPageView);

