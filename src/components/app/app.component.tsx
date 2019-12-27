import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {HeaderContainer} from '../header/header.container';
import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPageContainer} from '../../pages/shop/shop.container';
import {SignInAndSignUpPage} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {CheckoutPageContainer} from '../../pages/checkout-page/checkout-page.container';

import {checkUserSession} from '../../redux/user/user.actions';

import {User} from '../../redux/user/user.types';

import './app.styles.scss';

type Props = {
    currentUser: User | null,
    checkUserSession: typeof checkUserSession,
};

export class App extends React.Component<Props> {
    componentDidMount(): void {
        const {checkUserSession} = this.props;

        checkUserSession();
    }

    render() {
        const {currentUser} = this.props;

        return (
            <div>
                <HeaderContainer/>

                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPageContainer}/>
                    <Route
                        exact
                        path='/sign-in'
                        render={() => currentUser ? <Redirect to={'/'}/> : <SignInAndSignUpPage/>}
                    />
                    <Route exact path='/checkout' component={CheckoutPageContainer}/>
                </Switch>
            </div>
        );
    }
}
