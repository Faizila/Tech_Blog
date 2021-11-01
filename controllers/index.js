// import
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');


// routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


// message for wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// export
module.exports = router;