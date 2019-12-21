import React from 'react';
import {RouteComponentProps} from 'react-router';

import {DirectoryContainer} from '../../components/directory/directory.container';

import {HomePageContainer} from './homepage.styles';

export const HomePage: React.FC<RouteComponentProps> = () => (
    <HomePageContainer>
        <DirectoryContainer/>
    </HomePageContainer>
);
