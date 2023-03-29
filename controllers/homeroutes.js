const router = require('express').Router();
const { Product, Category, Tag, TagCategory } = require('../models');

// route to get to landing HOME page
router.get('/', async (req, res) => {
  res.render('homepage');
});

//route to login page
router.get('/login', async (req, res) => {
  res.render('login');
});

// route to user sign up
router.get('/sign-up', async (req, res) => {
  res.render('signup');
});

//route to shopping cart
router.get('/cart', async (req, res) => {
  res.render('cart');
});

//route to catalog
router.get('/catalog', async (req, res) => {
  try {
    const productData = await Product.findAll();
    const categoryData = await Category.findAll();

    const products = productData.map((product) => product.get({ plain: true }));
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render('catalog', { products, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to specific category in catalog
router.get('/category/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'img', 'price'],
        },
      ],
    });

    const category = categoryData.get({ plain: true });
    console.log(category);
    res.render('category', {
      ...category,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to specific product
router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Tag,
          attributes: ['tag_name'],
        },
      ],
    });

    const product = productData.get({ plain: true });
    console.log(product);
    res.render('product', {
      ...product,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//route to Contact page
router.get('/contact', async (req, res) => {
  res.render('contact');
});

//route to create Post to add to catalog
router.get('/sell', async (req, res) => {
  res.render('sell');
});

module.exports = router;
