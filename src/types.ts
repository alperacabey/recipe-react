export interface ContentfulResponse {
    sys: Sys;
    total: number;
    skip: number;
    limit: number;
    items: Item[];
    includes: Includes;
}

export interface Includes {
    Entry: Entry[];
    Asset: Asset[];
}

export interface Asset {
    metadata: Metadata;
    sys: AssetSys;
    fields: AssetFields;
}

export interface AssetFields {
    title: string;
    file: File;
}

export interface File {
    url: string;
    details: Details;
    fileName: string;
    contentType: string;
}

export type ContentType = 'recipe' | 'tags' | 'chef';

export interface Details {
    size: number;
    image: Image;
}

export interface Image {
    width: number;
    height: number;
}

export interface Metadata {
    tags: string[];
}

export interface AssetSys {
    space: Field;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: Field;
    revision: number;
    locale: string;
    contentType?: Field;
}

export interface Field {
    sys: FieldfSys;
}

export interface FieldfSys {
    id: string;
    type: string;
    linkType: string;
}

export interface Entry {
    metadata: Metadata;
    sys: AssetSys;
    fields: EntryFields;
}

export interface EntryFields {
    name: string;
}

export interface Item {
    metadata: Metadata;
    sys: AssetSys;
    fields: ItemFields;
}

export interface ItemFields {
    title: string;
    photo: Field;
    calories: number;
    description: string;
    tags?: Field[];
    chef?: Field;
    file?: File;
}

export interface Sys {
    type: string;
}


export interface FilesMap {
    [id: string]: File 
}