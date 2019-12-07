import React from 'react';
import {RouteComponentProps} from 'react-router';

import {MatchParams} from '../shop/shop.types';

import './collection-page.styles.scss';

type Props = RouteComponentProps<MatchParams>;

export const CollectionPage: React.FC<Props> = ({ match }) => (
  <div className='collection-page'>
      <h2>{ match.params.collectionId }</h2>
  </div>
);