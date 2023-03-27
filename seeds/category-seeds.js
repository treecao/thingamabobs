const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Sporting Goods',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Apparel',
  },
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Motors',
  },
  {
    category_name: 'Collectibles',
  },
  {
    category_name: 'Toys',
  },
  {
    category_name: 'Home & Garden',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
