import React from 'react';

import {SignInContainer} from '../../components/sign-in/sign-in.container';
import {SignUp} from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

export const SignInAndSignUpPage: React.FC = () => (
    <div className='sign-in-and-sign-up'>
        <SignInContainer />

        <SignUp />
    </div>
);
