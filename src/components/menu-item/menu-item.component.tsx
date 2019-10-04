import React from 'react';

import './menu-item.styles.scss';

type Props = {
    title: string;
    imageUrl: string;
    size?: 'large';
}

export const MenuItem: React.FC<Props> = ({title, imageUrl, size}) => (
    <div className={`${size || ''} menu-item`}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image'/>

        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
