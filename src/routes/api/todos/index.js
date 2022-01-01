import data from './data';

export const get = () => {
	return {
		body: {
			status: 'success',
			data
		}
	};
};

export const post = (req) => {
	data.push(JSON.parse(req.body));
	const status = req.body ? 'Success' : 'Error';
	return {
		body: {
			status,
			data
		}
	};
};
