import { Container } from './container';

export default (() => {
	let container: any = new Container();

	// Routes
	require('./providers/example')(container);

	// Shared
	require('./providers/shared/config-manager')(container);
	require('./providers/shared/database')(container);
	require('./providers/shared/utils')(container);

	return container;
})();
