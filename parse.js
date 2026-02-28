const fs = require('fs');
const html = fs.readFileSync('full.html', 'utf8');

// The DOM structure might contain the data in specific tags.
// Let's print out text that contains price, inclusions, etc.
const matchTitle = html.match(/<h[12][^>]*>(.*?)<\/h[12]>/gi);
console.log("Headers:", matchTitle);

const matchMeta = html.match(/<title>(.*?)<\/title>/i);
console.log("Title Meta:", matchMeta);

const extractJSON = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
if (extractJSON) console.log("LD JSON:", extractJSON[1]);

