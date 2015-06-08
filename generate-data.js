var size = Number(process.argv[2]);

if (isNaN(size)) {
	console.error('You should specify data size by the first parameter');
	process.exit();
	return;
}

var POSSIBLE_NAMES = [
	'Eric', 'Aaron', 'Dennis', 'Julia', 'John', 'Federic'
];

var POSSIBLE_SURNAMES = [
	'Newton', 'Smith', 'Johnson', 'Ritchie', 'Ocean', 'Castle'
];

function random(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var result = [],
	currentName, currentSurname;

for (var i = 0; i < size; i++) {
	currentName = random(POSSIBLE_NAMES);
	currentSurname = random(POSSIBLE_SURNAMES);
	result.push({
		name:  currentName + ' ' + currentSurname,
		email: currentName.toLowerCase() + '.' + currentSurname.toLowerCase() + '@gmail.com'
	});
}

var fs = require('fs'),
	file = fs.createWriteStream('./data.json'),
	json = JSON.stringify({list: result}, null, ' ');

file.end(json);