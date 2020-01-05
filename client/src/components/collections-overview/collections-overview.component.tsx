import React from 'react';
import {RouteComponentProps} from 'react-router';
import {DispatchProp} from 'react-redux';

import {CollectionPreview} from '../collection-preview/collection-preview.component';

import {Collection} from '../../redux/shop/shop.types';

import './collections-overview.styles.scss';

export type Props = RouteComponentProps & DispatchProp & {
    collections: ReadonlyArray<Collection>,
};

export const CollectionsOverview: React.FC<Props> = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, title, items, routeName}) => (
                <CollectionPreview key={id} title={title} items={items} routeName={routeName}/>
            ))
        }
    </div>
);


