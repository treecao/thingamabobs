const router = require('express').Router();
const userRoutes = require('./user-routes');
const catalogRoutes = require('./catalog-routes');

router.use('/user', userRoutes);
router.use('/catalog', catalogRoutes);

module.exports = router;
