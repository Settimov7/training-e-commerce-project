import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './spinner.styles';

export const Spinner: React.FC = () => (
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
);