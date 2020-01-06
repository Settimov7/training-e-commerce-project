import {RouteComponentProps} from 'react-router';
import {connect, MapDispatchToProps} from 'react-redux';

import {ShopPage} from './shop.component';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

type OwnProps = RouteComponentProps;

type DispatchProps = {
    fetchCollectionsStart: typeof fetchCollectionsStart,
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
    fetchCollectionsStart,
});

export default connect<null, DispatchProps, OwnProps>(null, mapDispatchToProps)(ShopPage);