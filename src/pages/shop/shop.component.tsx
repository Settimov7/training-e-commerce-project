import React from 'react';
import {RouteComponentProps} from 'react-router';
import {Route} from 'react-router-dom';
import {Unsubscribe} from 'firebase';
import {connect, MapDispatchToProps} from 'react-redux';

import {CollectionsOverview} from '../../components/collections-overview/collections-overview.component';
import {CollectionPage} from '../collection-page/collection-page.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

import {AppState} from '../../redux/types';

class ShopPageView extends React.Component<Props> {
    unsubscribeFromSnapshot: Unsubscribe | null = null;

    componentDidMount(): void {
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            updateCollections(collectionsMap);
        });

    }

    componentWillUnmount(): void {
        this.unsubscribeFromSnapshot && this.unsubscribeFromSnapshot();
    }

    render() {
        const {match} = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
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

