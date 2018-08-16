const Promise = require('bluebird');

module.exports = function(options){
	sails.log.error(`Fake module: Exec for deviceType: ${options.deviceType.name}, with value: ${options.state.value}`);
	return Promise.resolve(true);
};