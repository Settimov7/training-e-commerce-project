import React from 'react';
import {RouteComponentProps} from 'react-router';
import { Route } from 'react-router-dom';

import {CollectionsOverview} from '../../components/collections-overview/collections-overview.component';
import {CollectionPage} from '../collection-page/collection-page.component';

export const ShopPage: React.FC<RouteComponentProps> = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

