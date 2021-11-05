// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// /users

// LOGIN


// SIGNUP


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
