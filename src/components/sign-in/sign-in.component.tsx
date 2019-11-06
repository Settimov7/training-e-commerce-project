import React from 'react';

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
                    <label>
                        <input name='email' type='email' value={email} required onChange={this.handleChange}/>
                        Email
                    </label>

                    <label>
                        <input name='password' type='password' value={password} required onChange={this.handleChange}/>
                        Password
                    </label>

                    <button type='submit'>Submit Form</button>
                </form>
            </div>
        )
    }
}
