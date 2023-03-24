const { TagCategory } = require('../models');

const tagCategoryData = [
  {
    tag_category_name: 'rock music',
  },
  {
    tag_category_name: 'pop music',
  },
  {
    tag_category_name: 'blue',
  },
  {
    tag_category_name: 'red',
  },
  {
    tag_category_name: 'green',
  },
  {
    tag_category_name: 'white',
  },
  {
    tag_category_name: 'gold',
  },
  {
    tag_category_name: 'pop culture',
  },
];

const seedTagCategories = () => TagCategory.bulkCreate(tagCategoryData);

module.exports = seedTagCategories;
