import React from 'react';
import {RouteComponentProps} from 'react-router';
import {connect, DispatchProp, MapStateToProps} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selectors';

import {MatchParams} from '../shop/shop.types';
import {Collection} from '../../redux/shop/shop.types';
import {State} from '../../redux/types';

import './collection-page.styles.scss';

const CollectionPageView: React.FC<Props> = () => (
  <div className='collection-page'>
      <h2>Collection Page</h2>
  </div>
);

type OwnProps = RouteComponentProps<MatchParams>;

type StateProps = {
  collection: Collection | undefined,
};

type DispatchProps = DispatchProp;

type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export const CollectionPage = connect<StateProps, DispatchProps, OwnProps, State>(mapStateToProps)(CollectionPageView);