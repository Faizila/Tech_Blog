// import 
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/comments

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

  // CREATE
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
// success
    res.status(200).json(newComment);
    // error
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
// not found
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
// success
    res.status(200).json(commentData);
  // error
  } catch (err) {
    res.status(500).json(err);
  }
});
// export
module.exports = router;