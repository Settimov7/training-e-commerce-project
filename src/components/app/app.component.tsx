import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HomePage} from '../../pages/homepage/homepage.component';

import './app.styles.scss';

const HatsPage: React.FC = () => <div>HATS PAGE</div>;

export const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/hats' component={HatsPage}/>
        </Switch>
    );
};
