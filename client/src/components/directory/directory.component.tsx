import React from 'react';
import {DispatchProp} from 'react-redux';

import {MenuItem} from '../menu-item/menu-item.component';

import {Sections} from '../../redux/directory/directory.types';

import './directory.styles.scss';

type Props = DispatchProp & {
    sections: Sections,
};

export const Directory: React.FC<Props> = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, title, imageUrl, linkUrl, size}) => (
            <MenuItem
                key={id}
                title={title}
                imageUrl={imageUrl}
                size={size}
                linkUrl={linkUrl}
            />
        ))}
    </div>
);
