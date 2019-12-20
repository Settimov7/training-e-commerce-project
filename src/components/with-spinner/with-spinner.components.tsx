import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

export type WithSpinnerProps = {
    isLoading: boolean,
};

export const WithSpinner = <P extends WithSpinnerProps>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithSpinnerProps> =>
    ({isLoading, ...props}) => {
        if (isLoading) {
            return (
                <SpinnerOverlay>
                    <SpinnerContainer/>
                </SpinnerOverlay>
            )
        }

        return <WrappedComponent {...props as P} />
    };
