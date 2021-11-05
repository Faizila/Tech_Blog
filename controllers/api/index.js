// import
const router = require('express').Router();

const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');


// api/posts
router.use('/posts', postRoutes);
// api/comments
router.use('/comments', commentRoutes);

// export
module.exports = router;