export type DirectoryState = {
    sections: Sections,
}

export type DirectoryAction = any;

type Section = {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: 'large';
}

export type Sections = ReadonlyArray<Section>;