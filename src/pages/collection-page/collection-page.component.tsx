import React from 'react';
import {DispatchProp} from 'react-redux';

import {CollectionItemContainer} from '../../components/collection-item/collection-item.container';

import {Collection} from '../../redux/shop/shop.types';

import './collection-page.styles.scss';

type Props = DispatchProp & {
    collection: Collection | null,
};

export const CollectionPage: React.FC<Props> = ({collection}) => {
    if (!collection) {
        return null;
    }

    const {title, items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>

            <div className='items'>
                {
                    items.map((item) => <CollectionItemContainer key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};
