import {connect, MapDispatchToProps} from 'react-redux';

import {SignUp} from './sign-up.component';
import {signUpStart} from '../../redux/user/user.actions';

type OwnProps = {};

type DispatchProps = {
    signUpStart: typeof signUpStart,
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    signUpStart,
});

export const SignUpContainer = connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(SignUp);