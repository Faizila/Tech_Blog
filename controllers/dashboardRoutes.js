// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
// /dashboard

//GET all post 
router.get('/dashboard', withAuth,  async (req, res) => {
  try {
    
      res.render('dashboard', {
        loggedIn: req.session.logged_in,
      
      })
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE post


// EDIT post

// export
module.exports = router;