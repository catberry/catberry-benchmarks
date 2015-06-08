'use strict';

module.exports = Users;

var users = require('../../data.json');

/*
 * This is a Catberry Store file.
 * More details can be found here
 * https://github.com/catberry/catberry/blob/master/docs/index.md#stores
 */

/**
 * Creates new instance of the "Users" store.
 * @param {UHR} $uhr Universal HTTP request.
 * @constructor
 */
function Users() {
}

/**
 * Current lifetime of data (in milliseconds) that is returned by this store.
 * @type {number} Lifetime in milliseconds.
 */
Users.prototype.$lifetime = 60000;

/**
 * Loads data from remote source.
 * @returns {Promise<Object>|Object|null|undefined} Loaded data.
 */
Users.prototype.load = function () {
	return {users: users.list};
};
