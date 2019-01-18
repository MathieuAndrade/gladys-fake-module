const Promise = require('bluebird');

module.exports = function(options){
	sails.log.debug(`Fake module: Exec for deviceType: ${options.deviceType.identifier}, with value: ${options.state.value}`);
	gladys.deviceState.create(options.state)
	.then((result) => {
	})
	.catch((err) => {
		console.log(err)
		})
	return Promise.resolve(true);
};
