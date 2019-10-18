import React from "react";

import {CollectionItem} from "../collection-item/collection-item.component";

import './collection-preview.styles.scss';

type Props = {
    title: string,
    items: ReadonlyArray<{
        id: number,
        name: string,
        imageUrl: string,
        price: number
    }>,
}

export const CollectionPreview: React.FC<Props> = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className='preview'>
            {
                items
                    .filter((item, id) => id < 4)
                    .map(({ id, name, imageUrl, price }) => (
                        <CollectionItem key={id} id={id} name={name} imageUrl={imageUrl} price={price}/>
                    ))
            }
        </div>
    </div>
);
