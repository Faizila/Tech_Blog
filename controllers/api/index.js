// import
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// api/users
router.use('/users', userRoutes);
// api/posts
router.use('/posts', postRoutes);
// api/comments
router.use('/comments', commentRoutes);

// export
module.exports = router;