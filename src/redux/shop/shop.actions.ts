import {Collections, UpdateCollectionsAction} from './shop.types';
import {ShopActionTypes} from './shop.actions-types';

export const updateCollections = (payload: Collections): UpdateCollectionsAction => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload,
});