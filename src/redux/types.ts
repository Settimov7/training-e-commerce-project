import {UserState} from './user/user.types';
import {CartState} from './cart/cart.types';
import {DirectoryState} from './directory/directory.types';
import {ShopState} from './shop/shop.types';

export type AppState = {
    user: UserState,
    cart: CartState,
    directory: DirectoryState,
    shop: ShopState,
}
