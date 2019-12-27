import {connect, MapDispatchToProps} from 'react-redux';

import {SignIn} from './sign-in.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

type OwnProps = {};

type DispatchProps = {
    googleSignInStart: typeof googleSignInStart,
    emailSignInStart: typeof emailSignInStart,
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    googleSignInStart,
    emailSignInStart,
});

export const SignInContainer = connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(SignIn);