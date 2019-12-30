import React, {useState} from 'react';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.styles.scss';

type Props = {
    signUpStart: typeof signUpStart,
}

type UserCredentials = {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const DEFAULT_USER_CREDENTIALS: UserCredentials = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export const SignUp: React.FC<Props> = ({signUpStart}) => {
    const [{email, password, confirmPassword, displayName}, setUserCredentials] = useState<UserCredentials>(DEFAULT_USER_CREDENTIALS);

    const handleSubmit: React.FormEventHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(`Password don't match`);

            return;
        }

        signUpStart({email, password, displayName});
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {value, name} = event.target;

        setUserCredentials((prevUserCredentials) => ({
            ...prevUserCredentials,
            [name]: value,
        }));
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>

            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
};

