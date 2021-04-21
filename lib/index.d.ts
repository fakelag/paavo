declare type Geometry = {
    type: string;
    coordinates: any[];
};
declare type Feature = {
    type: 'Feature';
    id: string;
    geometry: Geometry;
    geometry_name: string;
    properties: {
        [key: string]: any;
    };
};
declare type FeatureType = {
    name: string;
    title: string;
    keywords: string[];
};
declare class Paavo {
    constructor(url?: string);
    isFeature(obj?: any): obj is Feature;
    listDatasets(): Promise<string[]>;
    getDataset(dataset: string): Promise<Feature[]>;
    getFeatureTypeList(): Promise<FeatureType[]>;
    getFeatures(typeName: string): Promise<Feature[]>;
    _url: string;
}
export { Paavo };
declare const _default: {
    Paavo: typeof Paavo;
};
export default _default;
