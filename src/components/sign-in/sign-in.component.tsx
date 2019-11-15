import React from 'react';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from "../custom-button/custom-button.component";

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

type Props = {

};

type State = {
    email: string,
    password: string,
};

export class SignIn extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    };

    handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value, name } = event.target;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    render() {
        const { email, password } = this.state;

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
