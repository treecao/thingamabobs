const router = require('express').Router();


// route to get home pages
router.get('/', async (req, res) => {
        res.render('homepage',);
      });

router.get('/login', async (req, res) => {
        res.render('login',);
      });

router.get('/contact', async (req, res) => {
        res.render('signup',);
      });

router.get('/cart', async (req, res) => {
        res.render('cart',);
      });
  



module.exports = router;
