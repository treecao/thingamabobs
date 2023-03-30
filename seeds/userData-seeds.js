const User = require('../models/user');

const userData = require('./userData.json');

// Seeds db with existing user login information from the userData.json file
const seedUserData = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUserData;
