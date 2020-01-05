import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {
    BackgroundImageContainer,
    ContentContainer,
    ContentSubtitle,
    ContentTitle,
    MenuItemContainer
} from './menu-item.styles';

type Props = RouteComponentProps & {
    title: string;
    imageUrl: string;
    size?: 'large';
    linkUrl?: string;
}

const MenuItemComponent: React.FC<Props> = ({title, imageUrl, size, linkUrl, history, match}) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export const MenuItem = withRouter(MenuItemComponent);
