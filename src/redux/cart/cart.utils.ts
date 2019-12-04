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

export const removeItemFromCart = (cartItems: CartItems, cartItemToRemove: CollectionItem): CartItems => {
    const existingCartItem = cartItems.find(({id}) => id === cartItemToRemove.id);

    if(existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(({id}) => id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1,
    } : cartItem);
};
