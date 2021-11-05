// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// /users

// LOGIN
router.post('/login', async (req, res) => {
  try { 
    const userData = await User.findOne({ where: {email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email address or password!' });
        return;
    }

    const userPass = await userData.checkPassword(req.body.password);

    if (!userPass) {
      res.status(400).json({ message: 'Incorrect email address or password!' });   
      return;
    }
     
    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.email = userData.email;
      req.session.logged_in = true;

      // dashboard.handlebars
      res.render('dashboard');
    });
// error
} catch (err){
    res.status(400).json(err);
  }
});

// SIGNUP
router.post('/signup', async  (req, res) => {

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
