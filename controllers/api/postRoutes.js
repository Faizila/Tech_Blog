// import 
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/posts

// CREATE
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      post: req.body.post,
      user_id: req.session.user_id,
    });
// success
    res.status(200).json(newPost);
    // error
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
// not found
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
// success
    res.status(200).json(postData);
  // error
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;