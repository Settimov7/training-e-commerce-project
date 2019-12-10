import React from 'react';
import {connect} from 'react-redux';

import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer, PriceContainer
} from "./collection-item.styles";

import { addItem } from '../../redux/cart/cart.actions';

import {CollectionItem as CollectionItemType} from "../../types";

const CollectionItemView: React.FC<Props> = ({item, addItem}) => {
    const {imageUrl, name, price} = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
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
