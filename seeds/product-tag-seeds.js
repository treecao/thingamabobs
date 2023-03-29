const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 1,
  },
  {
    product_id: 1,
    tag_id: 42,
  },
  {
    product_id: 1,
    tag_id: 59,
  },
  {
    product_id: 1,
    tag_id: 64,
  },
  {
    product_id: 1,
    tag_id: 69,
  },
  {
    product_id: 1,
    tag_id: 81,
  },
  {
    product_id: 2,
    tag_id: 5,
  },
  {
    product_id: 2,
    tag_id: 43,
  },
  {
    product_id: 2,
    tag_id: 68,
  },
  {
    product_id: 2,
    tag_id: 74,
  },
  {
    product_id: 2,
    tag_id: 80,
  },
  {
    product_id: 3,
    tag_id: 8,
  },
  {
    product_id: 3,
    tag_id: 61,
  },
  {
    product_id: 3,
    tag_id: 62,
  },
  {
    product_id: 4,
    tag_id: 4,
  },
  {
    product_id: 5,
    tag_id: 44,
  },
  {
    product_id: 5,
    tag_id: 6,
  },
  {
    product_id: 5,
    tag_id: 10,
  },
  {
    product_id: 6,
    tag_id: 8,
  },
  {
    product_id: 6,
    tag_id: 62,
  },
  {
    product_id: 7,
    tag_id: 1,
  },
  {
    product_id: 7,
    tag_id: 2,
  },
  {
    product_id: 7,
    tag_id: 25,
  },
  {
    product_id: 7,
    tag_id: 49,
  },
  {
    product_id: 8,
    tag_id: 2,
  },
  {
    product_id: 8,
    tag_id: 1,
  },
  {
    product_id: 8,
    tag_id: 8,
  },
  {
    product_id: 9,
    tag_id: 2,
  },
  {
    product_id: 9,
    tag_id: 1,
  },
  {
    product_id: 9,
    tag_id: 59,
  },
  {
    product_id: 9,
    tag_id: 60,
  },
  {
    product_id: 9,
    tag_id: 40,
  },
  {
    product_id: 9,
    tag_id: 41,
  },
  {
    product_id: 9,
    tag_id: 39,
  },
  {
    product_id: 9,
    tag_id: 66,
  },
  {
    product_id: 9,
    tag_id: 70,
  },
  {
    product_id: 10,
    tag_id: 4,
  },
  {
    product_id: 10,
    tag_id: 30,
  },
  {
    product_id: 10,
    tag_id: 56,
  },
  {
    product_id: 10,
    tag_id: 57,
  },
  {
    product_id: 10,
    tag_id: 59,
  },
  {
    product_id: 10,
    tag_id: 60,
  },
  {
    product_id: 10,
    tag_id: 77,
  },
  {
    product_id: 11,
    tag_id: 10,
  },
  {
    product_id: 11,
    tag_id: 6,
  },
  {
    product_id: 11,
    tag_id: 44,
  },
  {
    product_id: 12,
    tag_id: 10,
  },
  {
    product_id: 12,
    tag_id: 61,
  },
  {
    product_id: 12,
    tag_id: 62,
  },
  {
    product_id: 13,
    tag_id: 60,
  },
  {
    product_id: 13,
    tag_id: 2,
  },
  {
    product_id: 13,
    tag_id: 37,
  },
  {
    product_id: 13,
    tag_id: 49,
  },
  {
    product_id: 13,
    tag_id: 50,
  },
  {
    product_id: 13,
    tag_id: 51,
  },
  {
    product_id: 13,
    tag_id: 52,
  },
  {
    product_id: 14,
    tag_id: 3,
  },
  {
    product_id: 14,
    tag_id: 8,
  },
  {
    product_id: 15,
    tag_id: 12,
  },
  {
    product_id: 15,
    tag_id: 16,
  },
  {
    product_id: 15,
    tag_id: 41,
  },
  {
    product_id: 16,
    tag_id: 5,
  },
  {
    product_id: 16,
    tag_id: 2,
  },
  {
    product_id: 16,
    tag_id: 60,
  },
  {
    product_id: 16,
    tag_id: 62,
  },
  {
    product_id: 17,
    tag_id: 2,
  },
  {
    product_id: 17,
    tag_id: 4,
  },
  {
    product_id: 18,
    tag_id: 2,
  },
  {
    product_id: 18,
    tag_id: 6,
  },
  {
    product_id: 19,
    tag_id: 2,
  },
  {
    product_id: 19,
    tag_id: 42,
  },
  {
    product_id: 20,
    tag_id: 15,
  },
  {
    product_id: 20,
    tag_id: 2,
  },
  {
    product_id: 20,
    tag_id: 4,
  },
  {
    product_id: 20,
    tag_id: 13,
  },
  {
    product_id: 21,
    tag_id: 7,
  },
  {
    product_id: 21,
    tag_id: 81,
  },
  {
    product_id: 21,
    tag_id: 44,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
