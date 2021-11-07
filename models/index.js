// import
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Foreign key setup

// 1 user many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
});

// 1 user many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

// 1 post many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

// comment belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// comment belong to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// post belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// export
module.exports = { User, Post, Comment };