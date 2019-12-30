import React, {useState} from 'react';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

type Props = {
    googleSignInStart: typeof googleSignInStart;
    emailSignInStart: typeof emailSignInStart;
};

type UserCredentials = {
    email: string,
    password: string,
};

const DEFAULT_USER_CREDENTIALS: UserCredentials = {
    email: '',
    password: '',
};

export const SignIn: React.FC<Props> = ({googleSignInStart, emailSignInStart}) => {
    const [{email, password}, setUserCredentials] = useState<UserCredentials>(DEFAULT_USER_CREDENTIALS);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {value, name} = event.target;

        setUserCredentials((prevUserCredentials) => ({
            ...prevUserCredentials,
            [name]: value,
        }));
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    required
                    handleChange={handleChange}
                    label='Email'
                />

                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required
                    handleChange={handleChange}
                    label='Password'
                />

                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};
