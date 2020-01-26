const faker = require('faker');

const data = [];

for (let i = 0; i < 100; i++) {
    for (let j = 1; j < 51; j++) {
        data.push({property_id: i, name: faker.name.findName(), comments: faker.lorem.sentences(), user_photo: faker.image.avatar()});
    }
}

module.exports = data;
