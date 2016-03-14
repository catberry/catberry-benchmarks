'use strict';

class User {
	render() {
		return this.$context.getStoreData()
			.then(data => {
				return {user: data.users[this.$context.attributes.index]};
			});
	}
}

module.exports = User;
