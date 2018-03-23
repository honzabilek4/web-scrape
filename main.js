var scrape = require('website-scraper');
var options = {
  urls: ['https://dnnz.cz/cs/'],
  directory: __dirname + '/scrape',
  recursive: true,
  maxRecursiveDepth: 2,
  sources: [
   {selector: 'img', attr: 'data-src' }
  ],
  onResourceSaved: (resource) => {
    console.log(`Resource ${resource} was downloaded.`);
  },
};
 
// with promise
scrape(options).then((result) => {
    console.log;
}).catch((err) => {
    console.log;
});