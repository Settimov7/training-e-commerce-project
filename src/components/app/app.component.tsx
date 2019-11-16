import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Unsubscribe} from 'firebase';

import {Header} from '../header/header.component';
import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPage} from '../../pages/shop/shop.component';
import {SignInAndSignUpPage} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {User} from '../../types/user';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    const data = snapshot.data();

                    if (data) {
                        const {displayName, email, createdAt} = data;

                        this.setState({
                            currentUser: {
                                id: snapshot.id,
                                displayName,
                                email,
                                createdAt: createdAt.toDate(),
                            }
                        })
                    }
                })
            }

            this.setState({currentUser: null})
        })
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div>
                <Header currentUser={currentUser}/>

                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/sign-in' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}
