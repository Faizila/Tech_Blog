const { Post } = require('../models');

const postData = [

  {
    title: "Motivational Quote I",
    post: "Today is your opportunity to build the tomorrow you want. -KEN POIROT",
    user_id: 1
  },
  {
    title: "Motivational Quote II",
    post: "There is no excuse for not trying. -Barack Obama",
    user_id: 2
  },
  {
    title: "Motivational Quote III",
    post: "Dreams dont work unless you do. -Anonymous",
    user_id: 3
  },
  {
    title: "Motivational Quote IV",
    post: "Be so good they cant ignore you. -Steve Martin",
    user_id: 4
  }
]

// bulkcreate
const seedPost = () => Post.bulkCreate(postData);

// export
module.exports = seedPost;