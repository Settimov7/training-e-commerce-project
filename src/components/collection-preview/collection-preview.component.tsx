import React from "react";

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
                    .map(({id, name}) => (
                        <div key={id}>{name}</div>
                    ))
            }
        </div>
    </div>
);
