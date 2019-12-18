import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {MenuItem} from '../menu-item/menu-item.component';

import {selectSections} from '../../redux/directory/directory.selectors';

import {AppState} from '../../redux/types';
import {Sections} from '../../redux/directory/directory.types';

import './directory.styles.scss';

const DirectoryView: React.FC<Props> = ({sections}) => (
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

type OwnProps = {};

type StateProps = {
    sections: Sections,
}

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = createStructuredSelector<AppState, OwnProps, StateProps>({
    sections: selectSections,
});

export const Directory = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps)(DirectoryView);
