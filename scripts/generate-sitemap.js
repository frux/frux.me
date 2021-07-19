const path = require('path');
const sitemap = require('nextjs-sitemap-generator');

const ROOT = path.join(__dirname, '../');

sitemap({
	alternateUrls: {},
	baseUrl: 'https://frux.me',
	ignoredPaths: ['styles'],
	extraPaths: [],
	pagesDirectory: path.join(ROOT, 'pages'),
	targetDirectory: path.join(ROOT, 'out'),
	sitemapFilename: 'sitemap.xml',
	nextConfigPath: path.join(ROOT, 'next.config.js'),
	ignoredExtensions: ['png', 'jpg'],
	ignoreIndexFiles: false,
});
