import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Spinner} from '../spinner/spinner.component';
import {HeaderContainer} from '../header/header.container';
import {ErrorBoundary} from '../error-boundary/error-boundary.component';

import {checkUserSession} from '../../redux/user/user.actions';

import {User} from '../../redux/user/user.types';

import {GlobalStyle} from '../../global.styles';

type Props = {
    currentUser: User | null,
    checkUserSession: typeof checkUserSession,
};

const HomePage = lazy(() => import('../../pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('../../pages/shop/shop.container'));
const SignInAndSignUpPage = lazy(() => import('../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('../../pages/checkout-page/checkout-page.container'));

export const App: React.FC<Props> = ({currentUser, checkUserSession}) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle/>

            <HeaderContainer/>

            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/' component={HomePage}/>

                        <Route path='/shop' component={ShopPage}/>

                        <Route
                            exact
                            path='/sign-in'
                            render={() => currentUser ? <Redirect to={'/'}/> : <SignInAndSignUpPage/>}
                        />

                        <Route exact path='/checkout' component={CheckoutPage}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};
