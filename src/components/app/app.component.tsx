import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Unsubscribe} from 'firebase';
import {connect, MapDispatchToProps} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Header} from '../header/header.component';
import {HomePage} from '../../pages/homepage/homepage.component';
import {ShopPage} from '../../pages/shop/shop.component';
import {SignInAndSignUpPage} from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {CheckoutPage} from '../../pages/checkout-page/checkout-page.component';

import {setCurrentUser} from '../../redux/user/user.actions';

import {selectCurrentUser} from '../../redux/user/user.selectors';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import {User} from "../../redux/user/user.types";
import {State} from "../../redux/types";

import './app.styles.scss';

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
        const {currentUser} = this.props;

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route
                        exact
                        path='/sign-in'
                        render={() => currentUser ? <Redirect to={'/'} /> : <SignInAndSignUpPage />}
                    />
                    <Route exact path='/checkout' component={CheckoutPage} />
                </Switch>
            </div>
        );
    }
}


type OwnProps = {};

type StateProps = {
    currentUser: User | null
};

type DispatchProps = {
    setCurrentUser: typeof setCurrentUser,
}

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<State, OwnProps, StateProps>({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    setCurrentUser,
});

export const App = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps, mapDispatchToProps)(AppView);
