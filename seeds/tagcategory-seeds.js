const { TagCategory } = require('../models');

const tagCategoryData = [
  {
    tag_category_name: 'Shoes',
  },
  {
    tag_category_name: 'Color',
  },
  {
    tag_category_name: 'Size',
  },
  {
    tag_category_name: 'Sport',
  },
  {
    tag_category_name: 'Gender',
  },
  {
    tag_category_name: 'Tops',
  },
  {
    tag_category_name: 'Bottoms',
  },
  {
    tag_category_name: 'Fit',
  },
];

const seedTagCategories = () => TagCategory.bulkCreate(tagCategoryData);

module.exports = seedTagCategories;
