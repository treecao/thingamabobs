const User = require("../models/user");

const userData = require("./userData.json");


// Seeds db with existing user login information from the userData.json file
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  };

  seedDatabase();