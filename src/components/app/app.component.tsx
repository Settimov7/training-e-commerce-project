import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Unsubscribe, User} from 'firebase';

import {Header} from '../header/header.component';
import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPage} from '../../pages/shop/shop.component';
import {SignInAndSignUpPage} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from '../../firebase/firebase.utils';

import './app.styles.scss';

type Props = {};

type State = {
  currentUser: User | null,
};

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentUser: null
        }
    };

    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
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
    }
}
