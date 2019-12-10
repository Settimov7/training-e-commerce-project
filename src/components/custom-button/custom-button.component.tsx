import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

import {Props} from './custom-button.types';

export const CustomButton: React.FC<Props> = ({ children,  ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        { children }
    </CustomButtonContainer>
);
