import React from 'react';
import {RouteComponentProps} from 'react-router';
import {connect, DispatchProp, MapStateToProps} from 'react-redux';

import {CollectionItemContainer} from '../../components/collection-item/collection-item.container';

import {selectCollection} from '../../redux/shop/shop.selectors';

import {MatchParams} from '../shop/shop.types';
import {Collection} from '../../redux/shop/shop.types';
import {AppState} from '../../redux/types';

import './collection-page.styles.scss';

const CollectionPageView: React.FC<Props> = ({collection}) => {
    if (!collection) {
        return null;
    }

    const {title, items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>

            <div className='items'>
                {
                    items.map((item) => <CollectionItemContainer key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export type OwnProps = RouteComponentProps<MatchParams>;

type StateProps = {
    collection: Collection | null,
};

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export const CollectionPage = connect<StateProps, DispatchProps, OwnProps, AppState>(mapStateToProps)(CollectionPageView);
