# paavo

[![npm version](https://img.shields.io/npm/v/paavo.svg?style=flat-square)](https://www.npmjs.com/package/paavo)
[![npm downloads](https://img.shields.io/npm/dt/paavo.svg?style=flat-square)](https://www.npmjs.com/package/paavo)

paavo is an npm package for working with the [postinumeroalueittainen avoin tieto](https://www.stat.fi/tup/paavo/index.html) datasets. Paavo datasets contain by-postcode-area information on population structure, education, income, housing, jobs, the life stage of economies and the main activities of residents in Finland.

Paavo datasets are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fi). For more information visit [https://stat.fi/tup/paavo/index.html](https://stat.fi/tup/paavo/index.html).

## Installation
```
yarn add paavo
```

or 

```
npm i paavo
```

## Usage
### List datasets
```ts
import { Paavo } from 'paavo';

const paavo = new Paavo();

const datasets = await paavo.listDatasets();

console.log(datasets);

/*
Example output:
	[
		'postialue:pno',
		'postialue:pno_meri',
		'postialue:pno_meri_2015',
		'postialue:pno_meri_2016',
		'postialue:pno_meri_2017',
		'postialue:pno_meri_2018',
		'postialue:pno_meri_2019',
		'postialue:pno_meri_2020',
		'postialue:pno_meri_2021',
		'postialue:pno_2015',
		'postialue:pno_2016',
		'postialue:pno_2017',
		'postialue:pno_2018',
		'postialue:pno_2019',
		'postialue:pno_2020',
		'postialue:pno_2021',
		'postialue:pno_tilasto',
		'postialue:pno_tilasto_2015',
		'postialue:pno_tilasto_2016',
		'postialue:pno_tilasto_2017',
		'postialue:pno_tilasto_2018',
		'postialue:pno_tilasto_2019',
		'postialue:pno_tilasto_2020',
		'postialue:pno_tilasto_2021'
	]
*/
```

### Get dataset contents
```ts
import { Paavo } from 'paavo';

const paavo = new Paavo();

const pno_2015 = await paavo.getDataset('postialue:pno_2015');

console.log(pno_2015);

/*
Example output:
	[
		{
			type: 'Feature',
			id: 'pno_2015.1',
			geometry: { type: 'MultiPolygon', coordinates: [Array] },
			geometry_name: 'geom',
			properties: {
				posti_alue: '90440',
				nimi: 'Kempele Keskus',
				namn: 'Kempele centrum',
				kunta: '244',
				kuntanro: 244,
				vuosi: 2015,
				pinta_ala: 37279975.91,
				shape_star: 37279975.869,
				shape_stle: 29100.3757892,
				bbox: [Array]
			}
		},
		{
			type: 'Feature',
			id: 'pno_2015.2',
			geometry: { type: 'MultiPolygon', coordinates: [Array] },
			geometry_name: 'geom',
			properties: {
				posti_alue: '90450',
				nimi: 'Honkanen',
				namn: 'Honkanen',
				kunta: '244',
				kuntanro: 244,
				vuosi: 2015,
				pinta_ala: 49818170.52,
				shape_star: 49818170.6776,
				shape_stle: 35115.8537626,
				bbox: [Array]
			}
		},
		...
	]
*/
```
