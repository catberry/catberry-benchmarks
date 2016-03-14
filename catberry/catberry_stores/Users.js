'use strict';

const users = require('../../data.json');

class Users {
	constructor() {
		this.$lifetime = 60000;
	}
	load() {
		return {users: users.list};
	}
}

module.exports = Users;
