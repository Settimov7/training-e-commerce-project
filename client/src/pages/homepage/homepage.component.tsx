import React from 'react';
import {RouteComponentProps} from 'react-router';

import {DirectoryContainer} from '../../components/directory/directory.container';

import {HomePageContainer} from './homepage.styles';

const HomePage: React.FC<RouteComponentProps> = () => (
    <HomePageContainer>
        <DirectoryContainer/>
    </HomePageContainer>
);

export default HomePage;
