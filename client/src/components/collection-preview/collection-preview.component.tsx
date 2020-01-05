import React from 'react';

import {CollectionItemContainer} from '../collection-item/collection-item.container';

import {CollectionItems} from '../../types'
import {CollectionPreviewContainer, PreviewContainer, TitleContainer} from './collection-preview.styles';

type Props = {
    title: string,
    items: CollectionItems,
}

export const CollectionPreview: React.FC<Props> = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>
            {title.toUpperCase()}
        </TitleContainer>

        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItemContainer key={item.id} item={item}/>
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);
