import React from 'react';

import {SignInContainer} from '../../components/sign-in/sign-in.container';
import {SignUpContainer} from '../../components/sign-up/sign-up.container';

import './sign-in-and-sign-up.styles.scss';

export const SignInAndSignUpPage: React.FC = () => (
    <div className='sign-in-and-sign-up'>
        <SignInContainer />

        <SignUpContainer />
    </div>
);
