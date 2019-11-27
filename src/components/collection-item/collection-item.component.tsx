import React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

type Props = {
    id: number,
    name: string,
    imageUrl: string,
    price: number
};

export const CollectionItem: React.FC<Props> = ({id, name, imageUrl, price}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>

        <CustomButton inverted>Add to card</CustomButton>
    </div>
);
