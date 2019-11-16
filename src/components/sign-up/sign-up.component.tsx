import React from 'react';

import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

type Props = {}

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

		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert(`Password don't match`);

			return ;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			})
		} catch (error) {
			console.error(error)
		}
	};

	handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const { value, name } = event.target;

		this.setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

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
						name='displayName'
						value={email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>

					<FormInput
						type='password'
						name='displayName'
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

