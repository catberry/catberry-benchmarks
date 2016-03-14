'use strict';

class Head {
	constructor(locator) {
		this._config = locator.resolve('config');
	}
	render() {
		return this._config;
	}
}

module.exports = Head;
