type Section = {
	title: string;
	imageUrl: string;
	id: number;
	linkUrl: string;
	size?: 'large';
}

export type Sections = ReadonlyArray<Section>;
