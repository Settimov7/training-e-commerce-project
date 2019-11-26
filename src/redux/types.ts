import {UserState} from './user/user.types';
import {CartState} from './cart/cart.types';

export type State = {
    user: UserState,
    cart: CartState,
}
