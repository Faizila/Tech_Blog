// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// constructor class
// create a model for Post
class Post extends Model {}

// set up fields and rules for Post model
    Post.init(
      {
        // define columns
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
      title: {
          type: DataTypes.STRING,
          allowNull: false
        },
      post: {
          type: DataTypes.TEXT,
          allowNull: false
        },
      user_id: {
          type: DataTypes.INTEGER,
          // This references the `user` model, which we set in `User.js` as its `modelName` property
          references: {
            model: 'user',
            key: 'id'
          },
        },       
      },
      {
   // Link to database connection
   sequelize,
   // add `created_at` and `updated_at` fields
   timestamps: true,
   // don't change database table name
   freezeTableName: true,
   // underscores instead of camel casing
   underscored: true,
   // keeps lowercase model name in the database
  modelName: 'post',
      }
    );
    
    // export
    module.exports = Post;