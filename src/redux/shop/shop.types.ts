import {ShopActionTypes} from './shop.actions-types';

export type ShopState = {
    collections: Collections | null,
}

export type ShopAction = UpdateCollectionsAction;

export type UpdateCollectionsAction = {
    type: typeof ShopActionTypes.UPDATE_COLLECTIONS,
    payload: Collections,
}

export type Collections = Record<string, Collection>;

export type Collection = {
    id: string | number,
    title: string,
    routeName: string,
    items: CollectionItems,
};

type CollectionItems = ReadonlyArray<CollectionItem>;

type CollectionItem = {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
}