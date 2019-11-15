import React from 'react';

import './custom-button.styles.scss';

type Props = {
    type?: 'submit' | 'button',
    isGoogleSignIn?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        { children }
    </button>
);
