import {RouteComponentProps} from 'react-router';
import {connect, MapDispatchToProps} from 'react-redux';

import {ShopPage} from './shop.component';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

type OwnProps = RouteComponentProps;

//TODO: Вроде норм, но кажется, что что-то не так
type DispatchProps = {
    fetchCollectionsStartAsync: () => void,
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    fetchCollectionsStartAsync,
});

export const ShopPageContainer = connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(ShopPage);