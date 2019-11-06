import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from '../header/header.component';
import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPage} from '../../pages/shop/shop.component';
import {SignInAndSignUpPage} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './app.styles.scss';

export const App: React.FC = () => {
    return (
        <div>
            <Header/>

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/sign-in' component={SignInAndSignUpPage}/>
            </Switch>
        </div>
    );
};
