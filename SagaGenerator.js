var fs = require('fs');

(function () {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	});

	let KEY = '';
	let CAMELKEY = '';
	readline.question(`Enter any key (e.g. LOGIN_API)`, name => {
		console.log(`Just check the files in Redux folders ${name}!`);
		KEY = name;
		CAMELKEY = KEY.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
		CAMELKEY = CAMELKEY.substring(0, 1).toUpperCase() + CAMELKEY.substring(1);
		readline.close();

		const arrInput = [`./action.txt`, `./reducer.txt`, `./saga.txt`, `./type.txt`];
		const arrOutput = [
			`./Redux/actions/${CAMELKEY}Action.ts`,
			`./Redux/reducers/${CAMELKEY}Reducer.ts`,
			`./Redux/saga/${CAMELKEY}Saga.ts`,
			`./Redux/types/type.ts`
		];
		// const inputFile = `./action.txt`;
		// const OutputFile = `./Redux/${CAMELKEY}Action.ts`;

		for (let j = 0; j < arrInput.length; j++) {
			fs.readFile(arrInput[j], 'utf8', function (err, data) {
				if (err) {
					return console.log(err);
				}
				var updatedData = data;
				const reg1 = /CAMELKEY/g;
				const reg2 = /KEY/g;

				var newData = !!updatedData && updatedData.replace(reg1, CAMELKEY).replace(reg2, KEY);
				fs.writeFile(arrOutput[j], newData, 'utf8', function (err) {
					if (err) return console.log(err);
				});
			});
		}
	});
})();
