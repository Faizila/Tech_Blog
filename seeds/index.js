// import
const sequelize = require('../config/connection');

// seeds
const seedUser = require('./userSeed');
const seedPost = require('./postSeed');
const seedComment = require('./commentSeed');

// async seedAll function
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
    console.log('\n-- Database success --\n');
  
  await seedUser();
    console.log('\n--User seeding success --\n');
  
  await seedPost();
    console.log('\n-- Post seeding success --\n');

  await seedComment();
    console.log('\n-- Comment seeding success --\n');

        console.log('Successful in planting all seeds!');
  
process.exit(0);
};

// calling function
seedDatabase();