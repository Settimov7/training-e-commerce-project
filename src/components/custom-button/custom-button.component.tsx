import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

type Props = {
    type?: 'submit' | 'button',
    isGoogleSignIn?: boolean,
    inverted?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const CustomButton: React.FC<Props> = ({ children,  ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        { children }
    </CustomButtonContainer>
);
