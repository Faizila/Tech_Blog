// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET
router.get('/', withAuth, (req, res) => {
    
    Post.findAll({
      where: {
        // id from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'post',
        'created_at'
    ],
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
        }
      ]
    })
      .then(postData => {
        // map serialize data before sending it to deshboard template
        const posts = postData.map(post => post.get({ plain: true }));
        // dashboard.handlebars
        res.render('dashboard', { posts, logged_in: true });
      })
    // error
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// CREATE post

// EDIT post

// export
module.exports = router;