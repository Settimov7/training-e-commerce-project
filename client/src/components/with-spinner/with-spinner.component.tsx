import React from 'react';

import {Spinner} from '../spinner/spinner.component';

export type WithSpinnerProps = {
    isLoading: boolean,
};

export const WithSpinner = <P extends WithSpinnerProps>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithSpinnerProps> =>
    ({isLoading, ...props}) =>
        isLoading ? <Spinner/> : <WrappedComponent {...props as P} />;