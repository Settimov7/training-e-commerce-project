import React from 'react';

import {addItem} from '../../redux/cart/cart.actions';

import {CollectionItem as CollectionItemType} from '../../types';

import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer, PriceContainer
} from "./collection-item.styles";


type Props = {
    item: CollectionItemType,
    addItem: typeof addItem,
}

export const CollectionItem: React.FC<Props> = ({item, addItem}) => {
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
