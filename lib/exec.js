const Promise = require('bluebird');

module.exports = function(options){
	sails.log.debug(`Fake module: Exec for deviceType: ${options.deviceType.identifier}, with value: ${options.state.value}`);

	return gladys.deviceState.create(options.state)
		.then((result) => {
			return Promise.resolve(true);
		})
		.catch((err) => {
			return Promise.reject(err);
		})
};
