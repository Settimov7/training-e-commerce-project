import {CartItems, CollectionItem} from '../../types';

export const addItemToCart = (cartItems: CartItems, cartItemToAdd: CollectionItem): CartItems => {
    const existingCartItem = cartItems.find(({id}) => id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
        } : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
