import data from './data';

export const put = ({ body, params }) => {
	const req = JSON.parse(body);
	data[parseInt(params.id)] = {
		name: req.name,
		status: req.status
	};
	return {
		body: {
			data: req
		}
	};
};
