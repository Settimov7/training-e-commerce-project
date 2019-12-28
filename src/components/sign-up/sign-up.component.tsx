import React from 'react';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.styles.scss';

type Props = {
	signUpStart: typeof signUpStart,
}

type State = {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export class SignUp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit: React.FormEventHandler = async (event) => {
        event.preventDefault();

        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert(`Password don't match`);

            return;
        }

		signUpStart({ email, password, displayName });
    };

    handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {value, name} = event.target;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>

                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

