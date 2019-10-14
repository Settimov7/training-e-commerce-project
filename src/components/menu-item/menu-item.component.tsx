import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

type Props = RouteComponentProps & {
    title: string;
    imageUrl: string;
    size?: 'large';
    linkUrl?: string;
}

const MenuItemComponent: React.FC<Props> = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`${size || ''} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image'/>

        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export const MenuItem = withRouter(MenuItemComponent);
