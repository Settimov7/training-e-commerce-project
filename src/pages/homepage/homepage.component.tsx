import React from 'react';
import {RouteComponentProps} from 'react-router';

import { HomePageContainer } from './homepage.styles';
import { Directory } from '../../components/directory/directory.component';

export const HomePage: React.FC<RouteComponentProps> = () => (
	<HomePageContainer>
		<Directory/>
	</HomePageContainer>
);
