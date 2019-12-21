import React from 'react';
import {RouteComponentProps} from 'react-router';
import {Route} from 'react-router-dom';
import {connect, MapDispatchToProps} from 'react-redux';

import {CollectionOverviewContainer} from '../../components/collections-overview/collections-overview.container';
import {CollectionPageContainer} from '../collection-page/collection-page.container';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

class ShopPageView extends React.Component<Props> {
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

type OwnProps = RouteComponentProps;

//TODO: Вроде норм, но кажется, что что-то не так
type DispatchProps = {
    fetchCollectionsStartAsync: () => void,
}

type Props = OwnProps & DispatchProps;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    fetchCollectionsStartAsync,
});

export const ShopPage = connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(ShopPageView);

