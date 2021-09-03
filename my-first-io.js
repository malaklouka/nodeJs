const fs= require('fs')
var filename = process.argv[2]
file = fs.readFileSync(filename);
res = file.toString();
console.log(res.split('\n').length - 1);
