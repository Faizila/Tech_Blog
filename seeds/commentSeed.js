const { Comment } = require('../models');

const commentData = [

  {
    comment: "Awesome!",
    user_id: 1,
    post_id: 3
  },
  {
    comment: "Great!",
    user_id: 2,
    post_id: 5
  },
  {
    comment: "So True!",
    user_id: 1,
    post_id: 4
  },
  {
    comment: "Amazing!",
    user_id: 3,
    post_id: 2
  }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;