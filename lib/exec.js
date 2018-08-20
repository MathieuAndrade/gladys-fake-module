const Promise = require('bluebird');

module.exports = function(options){
	sails.log.debug(`Fake module: Exec for deviceType: ${options.deviceType.identifier}, with value: ${options.state.value}`);
	return Promise.resolve(true);
};
