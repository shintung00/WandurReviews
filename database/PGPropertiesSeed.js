var fs = require('fs');
var faker = require('faker');

let propertiesEntries = fs.createWriteStream('database/data/propertiesEntries.csv');

var createProperties = function(num) {
  var index = 0;
  for (var i = 0; i < num/10000; i++) {
    var load = '';
    for (var j = 0; j < 10000; j++) {
      // var property = index;
      var propertyName = faker.commerce.productName();
      var host= Math.round(Math.random() * 3000000);
      var ratingCommunication = Math.round(((Math.random() * 1.3 + 3.7) * 10))/10;
      var ratingCheckIn = Math.round(((Math.random() * 1.3 + 3.7) * 10))/10;
      var ratingCleanliness = Math.round(((Math.random() * 1.3 + 3.7) * 10))/10;
      var ratingAccuracy = Math.round(((Math.random() * 1.3 + 3.7) * 10))/10;
      var ratingLocation = Math.round(((Math.random() * 1.3 + 3.7) * 10))/10;
      var ratingValue = Math.round(((Math.random() * 1.3 + 3.7) * 10))/10;
      var ratingOverall = Math.round(((ratingCommunication + ratingCheckIn + ratingCleanliness + ratingAccuracy + ratingLocation + ratingValue)/6) * 100) / 100;

      var row = `${propertyName}, ${host}, ${ratingCommunication}, ${ratingCheckIn}, ${ratingCleanliness}, ${ratingAccuracy}, ${ratingLocation}, ${ratingValue}, ${ratingOverall} \n`;
      load = load + row;
      index ++;
    }
    propertiesEntries.write(load);
    if (index % 10000 === 0) {
      console.log('progress', index);
    };
  };
};

console.time('seed time');
createProperties(10000000);
// createProperties(100000);
console.timeEnd('seed time');