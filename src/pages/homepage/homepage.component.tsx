import React from 'react';
import {RouteComponentProps} from 'react-router';

import { Directory } from '../../components/directory/directory.component';

import './homepage.styles.scss';

export const HomePage: React.FC<RouteComponentProps> = () => (
	<div className='homepage'>
		<Directory/>
	</div>
);
