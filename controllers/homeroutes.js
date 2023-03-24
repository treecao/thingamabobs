const router = require('express').Router();


// route to get home pages
router.get('/', async (req, res) => {
        res.render('homepage',);
      });
  

module.exports = router;
