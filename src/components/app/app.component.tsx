import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Unsubscribe} from 'firebase';
import {connect, MapDispatchToProps} from 'react-redux';

import {Header} from '../header/header.component';
import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPage} from '../../pages/shop/shop.component';
import {SignInAndSignUpPage} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {setCurrentUser} from '../../redux/user/user.actions';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './app.styles.scss';

type Props = {
    setCurrentUser: typeof setCurrentUser;
};

class AppView extends React.Component<Props> {
    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount(): void {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef && userRef.onSnapshot((snapshot) => {
                    const data = snapshot.data();

                    if (data) {
                        const {displayName, email, createdAt} = data;

                        setCurrentUser({
                            id: snapshot.id,
                            displayName,
                            email,
                            createdAt: createdAt.toDate(),
                        })
                    }
                })
            }

            setCurrentUser(null)
        })
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/sign-in' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

type DispatchProps = {
    setCurrentUser: typeof setCurrentUser,
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = ({
    setCurrentUser,
});

export const App = connect(null, mapDispatchToProps)(AppView);
