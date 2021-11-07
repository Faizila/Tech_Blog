const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET 
router.get('/', async (req, res) => {
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

    // homepage.handlebars
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
    // error
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with username
    const dashboardData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = dashboardData.map((post) => post.get({ plain: true }));

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

 // /login
router.get('/login', (req, res) => {
  // if logged in
  if (req.session.logged_in) {
    // redirect the request to another route
    res.redirect('/dashboard');
    return;
  }
// login.handlebars
  res.render('login');
});

// /signup
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
// signup.handlebars
  res.render('signup');
});

// export
module.exports = router;
