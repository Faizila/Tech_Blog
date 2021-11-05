// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// constructor class
// create a model for Comment
class Comment extends Model {}

// set up fields and rules for Comment model
    Comment.init(
      {
        // define columns
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      comment: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          // This references the `user` model, which we set in `User.js` as its `modelName` property
          references: {
              model: 'user',
              key: 'id'
          },
        },
      // post_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     // This references the `post` model, which we set in `Post.js` as its `modelName` property
      //     references: {
      //         model: 'post',
      //         key: 'id'
      //     },
      //   },
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
modelName: 'comment',
      }
    );
    
    // export
    module.exports = Comment;