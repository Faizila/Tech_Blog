const router = require('express').Router();
const { User } = require('../../models');

// api/users/login

// login
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
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    //  success
      res.json({ user: userData, message: 'Login successful!' });
    });
// error
  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
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
