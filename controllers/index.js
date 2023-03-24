const router = require('express').Router();
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
