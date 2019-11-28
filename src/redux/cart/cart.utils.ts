import {CartItem} from './cart.types';
import {CollectionItem} from '../../types';

export const addItemToCart = (cartItems: ReadonlyArray<CartItem>, cartItemToAdd: CollectionItem): ReadonlyArray<CartItem> => {
    const existingCartItem = cartItems.find(({id}) => id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToAdd.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
        } : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};