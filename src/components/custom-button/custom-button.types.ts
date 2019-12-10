import React from 'react';

export type Props = {
    type?: 'submit' | 'button',
    isGoogleSignIn?: boolean,
    inverted?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}