import React from 'react';

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';

type Props = {};

type State = {
    hasErrored: boolean,
};

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hasErrored: false,
        };
    }

    static getDerivedStateFromError(): State {
        return {hasErrored: true};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'}/>
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}