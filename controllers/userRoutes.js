// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// /users

// LOGIN
router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    console.log('=================================================================================================================')
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
// check password
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
 res.render('dashboard');
//  error
  } catch (err) {
    res.status(400).json(err);
  }
});

// SIGNUP
router.post('/signup', async  (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
// success
      res.status(200).json(userData);
    });
    res.render('dashboard');
    // error
  } catch (err) {
    res.status(400).json(err);
  }
});

// LOGOUT
router.get('/logout',  (req, res) => {
      if (req.session.logged_in) {
        // delete session
        req.session.destroy(() => {
          res.status(204).end();
          
        });
        // redirect
        res.redirect('/');
       } else {
        res.status(404).end();
      }
      });

// export
module.exports = router;
