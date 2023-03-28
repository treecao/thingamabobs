const router = require('express').Router();

const { Product, Category, Tag, TagCategory } = require('../../models');

//route to catalog
router.get('/catalog', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.render('catalog');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
