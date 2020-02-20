var fs = require('fs');
var faker = require('faker');
// var uuid4 = require('uuid/v4');

let entries = fs.createWriteStream('database/data/cassieEntries.csv');

var createProperties = function(num) {
  var review = 0;
  var properties = 0;
  for (var i = 0; i < num/10000; i++) {
    var load = ``;
    for (var j = 0; j < 10000; j++) {
      var propertyID = properties;
      var hostID = Math.round(Math.random() * 3000000);
      var hostName = faker.name.lastName();
      var hostPic = faker.internet.avatar();
      for (var k = 0; k < 5; k++) {
        var reviewID = review;
        var userId = Math.round(Math.random() * 20000000);
        var userName = faker.name.lastName();
        var userPic = faker.internet.avatar();
        var reviewTime = faker.date.past();
        var reviewComment = faker.lorem.sentence();
        var hostReplied = faker.random.boolean();
        var hostComment = '';
        var hostTime = '';
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
        // var ratingOverall = Math.round(((ratingCommunication + ratingCheckIn + ratingCleanliness + ratingAccuracy + ratingLocation + ratingValue)/6) * 10) / 10;
        var row = `${propertyID}, ${reviewID}, ${userId}, ${userName}, ${userPic}, ${reviewComment}, ${reviewTime}, ${hostID}, ${hostName}, ${hostPic}, ${hostComment}, ${hostTime}, ${ratingCommunication}, ${ratingCheckIn}, ${ratingCleanliness}, ${ratingAccuracy}, ${ratingLocation}, ${ratingValue} \n`;
        load = load + row;
        review ++;
      }
      properties ++;
    }
    entries.write(load);
    if (review % 100000 === 0) {
      console.log('progress', review);
    };
  };
};

console.time('seed time');
createProperties(10000000);
// createProperties(10000);
console.timeEnd('seed time');