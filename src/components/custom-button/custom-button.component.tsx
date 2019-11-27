import React from 'react';

import './custom-button.styles.scss';

type Props = {
    type?: 'submit' | 'button',
    isGoogleSignIn?: boolean,
    inverted?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, inverted,  ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        { children }
    </button>
);
