var fs = require('fs');
var faker = require('faker');

let hostEntries = fs.createWriteStream('database/data/hostEntries.csv');

var createHosts = function(num) {
  var index = 0;
  for (var i = 0; i < num/10000; i++) {
    var load = '';
    for (var j = 0; j < 10000; j++) {
      // var host = index;
      var hostName = faker.name.lastName();
      var hostPic = faker.internet.avatar();

      var row = `${hostName}, ${hostPic} \n`;
      load = load + row;
      index ++;
    }
    hostEntries.write(load);
    if (index % 10000 === 0) {
      console.log('progress', index);
    };
  };
};

console.time('seed time');
createHosts(30000000);
console.timeEnd('seed time');