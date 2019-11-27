import React from 'react';

import {CollectionItem} from '../collection-item/collection-item.component';

import {CollectionItems} from '../../types'

import './collection-preview.styles.scss';

type Props = {
    title: string,
    items: CollectionItems,
}

export const CollectionPreview: React.FC<Props> = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className='preview'>
            {
                items
                    .filter((item, id) => id < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </div>
    </div>
);
