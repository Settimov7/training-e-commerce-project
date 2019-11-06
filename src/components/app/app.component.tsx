import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPage} from '../../pages/shop/shop.component';
import {Header} from '../header/header.component';

import './app.styles.scss';

export const App: React.FC = () => {
    return (
        <div>
            <Header/>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
};
