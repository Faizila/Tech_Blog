const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
     });

    // map serialize data before sending it to homepage template
    const posts = postData.map((post) => post.get({ plain: true }));
// homepage.handlebars
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
    // error
  } catch (err) {
    res.status(500).json(err);
  }
});

// /login
router.get('/login', (req, res) => {
  // if logged in
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
// login.handlebars
  res.render('login');
});

// /signup
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
// signup.handlebars
  res.render('signup');
});

// export
module.exports = router;
