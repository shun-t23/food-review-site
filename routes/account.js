const router = require('express').Router();
const {
  authenticate,
  authorize,
  PRIVILEGE,
} = require('../lib/security/accesscontrol.js');

router.get('/', authorize(PRIVILEGE.NORMAL), (req, res, next) => {
  res.render('./account/index.ejs');
});

router.get('/login', (req, res) => {
  res.render('./account/login.ejs', { message: req.flash('message') });
});

router.post('/login', authenticate());

router.use(
  '/reviews',
  authorize(PRIVILEGE.NORMAL),
  require('./account.reviews.js')
);

module.exports = router;
