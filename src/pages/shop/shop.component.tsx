import React from 'react';
import {Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

import {CollectionOverviewContainer} from '../../components/collections-overview/collections-overview.container';
import {CollectionPageContainer} from '../collection-page/collection-page.container';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

type Props = RouteComponentProps & {
    fetchCollectionsStart: typeof fetchCollectionsStart
};

export class ShopPage extends React.Component<Props> {
    componentDidMount(): void {
        const { fetchCollectionsStart } = this.props;

        fetchCollectionsStart();
    }

    render() {
        const {match} = this.props;

        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />

                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        );
    };
}

