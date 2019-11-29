export type CollectionItems = ReadonlyArray<CollectionItem>;

export type CollectionItem = {
    id: number,
    name: string,
    imageUrl: string,
    price: number
};

export type CartItems = ReadonlyArray<CartItem>;

export type CartItem = CollectionItem & {
    quantity: number,
}
