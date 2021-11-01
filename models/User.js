// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import bcrypt for hashing password
const bcrypt = require('bcrypt');
// import our database connection from config.js
const sequelize = require('../config/connection');

// constructor class
// create a model for User
class User extends Model {
    // instance to check password
  checkPassword(userPass) {
    return bcrypt.compareSync(userPass, this.password);
  }
}

// set up fields and rules for User model
User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      // NOT NULL
      allowNull: false,
      // id is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique each time
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // the password must be at least 7 characters long
        len: [7],
      },
    },
  },
  {
    // hooks
    hooks: {
      // set up beforeCreate
      beforeCreate: async (newUserData) => {
        // hashing password
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // don't change database table name
    freezeTableName: true,
    // underscores instead of camel casing
    underscored: true,
    // keeps lowercase model name in the database
    modelName: 'user',
  }
);

// export
module.exports = User;
