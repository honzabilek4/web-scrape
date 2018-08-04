var scrape = require('website-scraper');
var options = {
  urls: ['https://ibodies.eu'],
  directory: __dirname + '/scrape',
  recursive: true,
  maxRecursiveDepth: 4,
  filenameGenerator: 'bySiteStructure',
  urlFilter: function(url){
    return url.indexOf('https://ibodies.eu') === 0;
  },
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