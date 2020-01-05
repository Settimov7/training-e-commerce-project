import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {CollectionItemContainer} from '../collection-item/collection-item.container';

import {CollectionItems} from '../../types'
import {CollectionPreviewContainer, PreviewContainer, TitleContainer} from './collection-preview.styles';

type Props = RouteComponentProps & {
    title: string,
    items: CollectionItems,
    routeName: string,
}

const CollectionPreviewComponent: React.FC<Props> = ({title, items, history, match, routeName}) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
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

export const CollectionPreview = withRouter(CollectionPreviewComponent);
