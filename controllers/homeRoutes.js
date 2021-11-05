const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all
router.get('/', (req, res) => {
  try {

      res.render('homepage')

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
