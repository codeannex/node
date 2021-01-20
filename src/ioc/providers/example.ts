import { Example } from '../services/example/example';

module.exports = function(container: any) {
	container.service('Example', (container: any) => {
		return new Example(container.Utils);
	});
};
