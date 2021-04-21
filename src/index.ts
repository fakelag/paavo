const wfs = require('wfs');
const WfsClient = require('wfs-client');

/*
	Asukasrakenne 								HE
	Asukkaiden koulutusaste 					KO
	Asukkaiden käytettävissä olevat rahatulot 	HR
	Talouksien koko ja elämänvaihe 				TE
	Talouksien käytettävissä olevat rahatulot 	TR
	Rakennukset ja asuminen 					RA
	Työpaikat toimialoittain 					TP
	Asukkaiden pääasiallinen toiminta 			PT

	https://www.stat.fi/static/media/uploads/tup/ruututietokanta/rttk2018_kuvaus_fi.pdf
*/

type Geometry = {
	type: string;
	coordinates: any[];
};

type Feature = {
	type: 'Feature';
	id: string;
	geometry: Geometry;
	geometry_name: string;
	properties: {
		[key: string]: any;
	};
};

type FeatureType = {
	name: string;
	title: string;
	keywords: string[];
};

class Paavo {
	constructor(url: string = 'https://geo.stat.fi/geoserver/postialue/wfs') {
		this._url = url;
	}

	isFeature(obj?: any): obj is Feature {
		return obj?.type === 'Feature';
	}

	async listDatasets(): Promise<string[]> {
		const featureTypes = await this.getFeatureTypeList();
		return featureTypes.map(({ name }) => name);
	}

	async getDataset(
		dataset: string,
	): Promise<Feature[]> {
		return this.getFeatures(dataset);
	}

	async getFeatureTypeList(): Promise<FeatureType[]> {
		const client = new WfsClient(this._url);
	
		const capabilities = await client.capabilities();
	
		return capabilities.featureTypes;
	};

	async getFeatures(typeName: string): Promise<Feature[]> {
		const url = this._url;
		return new Promise((resolve, reject) => {
			const handleFeatures = (err: any, results: any) => {
				if (err) {
					reject(err);
				}
			
				if (results.features && Array.isArray(results.features)) {
					resolve(results.features.filter(this.isFeature));
				} else {
					reject(new Error('invalid_feature_list'));
				}
			};
	
			wfs.getFeature({
				url,
				typeName,
			}, handleFeatures);
		});
	}

	_url: string;
}

export { Paavo };
export default { Paavo };
