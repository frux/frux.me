const fs = require('fs/promises');
const path = require('path');
const glob = require('glob');

const outDir = process.argv[2];

glob(path.join(outDir, './**/*.html'), (err, matches) => {
	if (err) {
		throw err;
	}

	// Delete all scripts except of Yandex.Metrika
	Promise.all(matches.map(async filePath => {
		console.log(`deleting scripts from ${filePath}`);
		const content = String(await fs.readFile(filePath));
		const newContent = content.replace(/<script\s(?!id="metrika").+?<\/script>/g, '');

		return fs.writeFile(filePath, newContent);
	}));
});
