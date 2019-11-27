import React from 'react';
import {connect} from 'react-redux';

import { CustomButton } from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

import {CollectionItem as CollectionItemType} from "../../types";

import './collection-item.styles.scss';

const CollectionItemView: React.FC<Props> = ({item, addItem}) => {
    const {imageUrl, name, price} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton onClick={() => addItem(item)} inverted>Add to card</CustomButton>
        </div>
    );
};

type OwnProps = {
    item: CollectionItemType,
}

type DispatchProps = {
    addItem: typeof addItem,
}

type Props = OwnProps & DispatchProps;

export const mapDispatchToProps = ({
    addItem,
});

export const CollectionItem = connect<null, DispatchProps, OwnProps>(
    null,
    mapDispatchToProps
)(CollectionItemView);
