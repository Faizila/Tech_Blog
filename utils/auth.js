const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/');
    } else {
    // next
      next();
    }
  };
  
// export
  module.exports = withAuth;