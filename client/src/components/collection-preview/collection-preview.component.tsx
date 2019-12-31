import React from 'react';

import {CollectionItemContainer} from '../collection-item/collection-item.container';

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
                        <CollectionItemContainer key={item.id} item={item}/>
                    ))
            }
        </div>
    </div>
);
