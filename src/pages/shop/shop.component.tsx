import React from 'react';
import {Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

import {CollectionOverviewContainer} from '../../components/collections-overview/collections-overview.container';
import {CollectionPageContainer} from '../collection-page/collection-page.container';

type Props = RouteComponentProps & {
    fetchCollectionsStartAsync: () => void,
};

export class ShopPage extends React.Component<Props> {
    componentDidMount(): void {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
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

