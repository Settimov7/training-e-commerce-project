export type ShopState = {
    collections: Collections,
}

export type ShopAction = any;

export type Collections = ReadonlyArray<Collection>;

type Collection = {
    id: number,
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