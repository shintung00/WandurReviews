var fs = require('fs');
var faker = require('faker');

let usersEntries = fs.createWriteStream('database/data/userTestEntries.csv');

var createUsers = function(num) {
  var index = 0;
  for (var i = 0; i < num/10000; i++) {
    var load = '';
    for (var j = 0; j < 10000; j++) {
      // var user = index;
      var userName = faker.name.lastName();
      var userPic = faker.internet.avatar();

      var row = `${userName}, ${userPic} \n`;
      load = load + row;
      index ++;
    }
    usersEntries.write(load);
    if (index % 10000 === 0) {
      console.log('progress', index);
    };
  };
};

console.time('seed time');
createUsers(100000);
console.timeEnd('seed time');