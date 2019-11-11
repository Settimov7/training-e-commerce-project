import React from 'react';

import './custom-button.styles.scss';

type Props = {
    type?: 'submit',
}

export const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        { children }
    </button>
);
