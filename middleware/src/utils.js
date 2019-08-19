const rp = require('request-promise');

const BASE_URL = 'https://api.carbonintensity.org.uk/generation';

const query = url => {
	return rp({
		method: 'GET',
		uri: url,
		json: true,
	});
};

export const getGenerationMix = () => query(BASE_URL);
