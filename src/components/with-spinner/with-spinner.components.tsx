import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

type WithSpinnerProps = {
    isLoading: boolean,
};

export const WithSpinner = <P extends WithSpinnerProps>(WrappedComponent: React.ComponentType<P>) =>
    ({isLoading, ...otherProps}: WithSpinnerProps & P): React.ReactElement => {
        if (isLoading) {
            return (
                <SpinnerOverlay>
                    <SpinnerContainer/>
                </SpinnerOverlay>
            )
        }

        return <WrappedComponent {...otherProps as P} />
    };