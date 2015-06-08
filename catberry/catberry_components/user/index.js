'use strict';

module.exports = User;

/*
 * This is a Catberry Cat-component file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#cat-components
 */

/**
 * Creates new instance of the "user" component.
 * @constructor
 */
function User() {

}

/**
 * Gets data context for template engine.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Data context
 * for template engine.
 */
User.prototype.render = function () {
	var self = this;
	return this.$context.getStoreData()
		.then(function (data) {
			return {user: data.users[self.$context.attributes.index]};
		});
};
