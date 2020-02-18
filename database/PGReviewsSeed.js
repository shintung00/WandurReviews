var fs = require('fs');
var faker = require('faker');

let reviewEntries = fs.createWriteStream('database/data/reviewEntries.csv');

var createReviews = function(num) {
  var index = 0;
  for (var i = 0; i < num/10000; i++) {
    var load = '';
    for (var j = 0; j < 10000; j++) {
      // var review = index;
      var property = Math.round(Math.random() * 10000000);
      var user = Math.round(Math.random() * 20000000);
      var time = faker.date.past();
      var comment = faker.lorem.sentence() + ' ' + faker.lorem.sentence();
      var host = Math.round(Math.random() * 3000000);
      var hostReplied = faker.random.boolean();
      var hostComment = null;
      var hostTime = null;
      if (hostReplied) {
        hostComment = faker.lorem.sentence();
        hostTime = faker.date.past();
      }
      var ratingCommunication = Math.round(Math.random() * 1.3 + 3.7);
      var ratingCheckIn = Math.round(Math.random() * 1.3 + 3.7);
      var ratingCleanliness = Math.round(Math.random() * 1.3 + 3.7);
      var ratingAccuracy = Math.round(Math.random() * 1.3 + 3.7);
      var ratingLocation = Math.round(Math.random() * 1.3 + 3.7);
      var ratingValue = Math.round(Math.random() * 1.3 + 3.7);
      var ratingOverall = Math.round(((ratingCommunication + ratingCheckIn + ratingCleanliness + ratingAccuracy + ratingLocation + ratingValue)/6) * 10) / 10;

      var row = `${property}, ${user}, ${time}, ${comment}, ${host}, ${hostReplied}, ${hostComment}, ${hostTime}, ${ratingCommunication}, ${ratingCheckIn}, ${ratingCleanliness}, ${ratingAccuracy}, ${ratingLocation}, ${ratingValue}, ${ratingOverall} \n`;
      load = load + row;
      index ++;
    }
    reviewEntries.write(load);
    if (index % 100000 === 0) {
      console.log('progress', index);
    };
  };
};

console.time('seed time');
createReviews(60000000);
console.timeEnd('seed time');