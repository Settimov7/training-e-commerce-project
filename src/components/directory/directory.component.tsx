import React from 'react';

import { MenuItem } from '../menu-item/menu-item.component';

import { Sections } from './directory.types';

import './directory.styles.scss';

type Props = {};

type State = {
	sections: Sections;
}

const SECTIONS: Sections = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1,
		linkUrl: 'hats'
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2,
		linkUrl: 'jackets'
	},
	{
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		id: 3,
		linkUrl: 'sneakers'
	},
	{
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		size: 'large',
		id: 4,
		linkUrl: 'womens'
	},
	{
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		size: 'large',
		id: 5,
		linkUrl: 'mens',
	},
];

export class Directory extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			sections: SECTIONS,
		}
	}

	render() {
		const { sections } = this.state;

		return (
			<div className='directory-menu'>
				{ sections.map(({ id, title, imageUrl, linkUrl, size }) => (
					<MenuItem
						key={ id }
						title={ title }
						imageUrl={ imageUrl }
						size={ size }
						linkUrl={ linkUrl }
					/>
				)) }
			</div>
		);
	}
}
