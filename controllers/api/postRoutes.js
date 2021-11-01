// import 
const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all 
router.get('/', (req, res) => {
       Post.findAll({
        attributes: [
            'id',
            'title',
            'post',
            'created_at'
        ],
      order: [['created_at', 'DESC']],
      include: [
          {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
      ]
    })
    // success
      .then(postData => res.json(postData))
    //  error
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// export
module.exports = router;