// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
// /dashboard

//GET all post 
router.post('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with username
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // dashboard.handlebars
    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in 
    });
    // error
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;