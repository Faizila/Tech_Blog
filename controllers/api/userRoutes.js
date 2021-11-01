// import
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../../utils/auth');

// api/users

// GET all
router.get('/', (req, res) => {
   User.findAll({
      attributes: { exclude: ['password'] }
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        // error
      res.status(400).json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
     req.session.logged_in = true;
    //  success
      res.json({ user: userData, message: 'Login successful!' });
    });
// error
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST create
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

  req.session.save(() => {
  req.session.logged_in = true;
// success
  res.status(200).json(userData);
    });
    // error
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // delete
    req.session.destroy(() => {
    // success
        res.status(204).end();
    });
  } else {
    // error
    res.status(404).end();
  }
});

// export
module.exports = router;
