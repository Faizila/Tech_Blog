// import
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


// routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// message for wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// export
module.exports = router;