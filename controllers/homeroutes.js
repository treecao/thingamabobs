const router = require('express').Router();


// route to get to landing HOME page
router.get('/', async (req, res) => {
        res.render('homepage',);
      });

//route to login page
router.get('/login', async (req, res) => {
        res.render('login',);
      });

// route to user sign up
router.get('/sign-up', async (req, res) => {
        res.render('signup',);
      });

//route to shopping cart       
router.get('/cart', async (req, res) => {
        res.render('cart',);
      });

//route to catalog
router.get('/catalog', async (req, res) => {
  res.render('catalog',);
});

//route to Contact page 
router.get('/contact', async (req, res) => {
  res.render('contact',);
});

//route to create Post to add to catalog
router.get('/sell', async (req, res) => {
  res.render('sell',);
});
  



module.exports = router;
