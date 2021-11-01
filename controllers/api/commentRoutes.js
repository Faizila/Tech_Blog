// import 
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all
router.get('/', (req, res) => {
    Comment.findAll({})
    // success
      .then(commentData => res.json(commentData))
      // error
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// POST
router.post('/', withAuth, (req, res) => {
  // check session
  if (req.session) {
    Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      // id from the session
      user_id: req.session.user_id,
    })
    // success
      .then(commentData => res.json(commentData))
      // error
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// DELETE by id
router.delete('/:id', withAuth, (req, res) => {
  // delete 
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(commentData => {
          if (!commentData) { res.status(404).json({ message: 'No comment found with this id!' });
            return;
          }
          // success
          res.json(commentData);
        })
        // error
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// export
module.exports = router;