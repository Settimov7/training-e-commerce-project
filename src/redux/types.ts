import {UserState} from './user/user.types';
import {CartState} from './cart/cart.types';
import {DirectoryState} from './directory/directory.types';

export type State = {
    user: UserState,
    cart: CartState,
    directory: DirectoryState,
}
