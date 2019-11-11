import React from 'react';

import './form-input.styles.scss';

type Props = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    value: string;
    name?: string;
    type?: 'text' | 'email' | 'password';
    required?: boolean;
}

export const FormInput: React.FC<Props> = ({ handleChange, label, value, name, ...otherProps }) => (
    <div className='group'>
    <input className='form-input' onChange={handleChange} name={name} value={value} {...otherProps} />
    { label && <label className={`${value.length ? 'shrink' : ''} form-input-label`} htmlFor={name}>{label}</label> }
</div>
);
