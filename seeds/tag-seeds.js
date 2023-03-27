const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'White',
    tag_category: 2,
  },
  {
    tag_name: 'Black',
    tag_category: 2,
  },
  {
    tag_name: 'Gold',
    tag_category: 2,
  },
  {
    tag_name: 'Red',
    tag_category: 2,
  },
  {
    tag_name: 'Blue',
    tag_category: 2,
  },
  {
    tag_name: 'Gray',
    tag_category: 2,
  },
  {
    tag_name: 'Green',
    tag_category: 2,
  },
  {
    tag_name: 'Multi',
    tag_category: 2,
  },
  {
    tag_name: 'Purple',
    tag_category: 2,
  },
  {
    tag_name: 'Brown',
    tag_category: 2,
  },
  {
    tag_name: 'Pink',
    tag_category: 2,
  },
  {
    tag_name: 'Orange',
    tag_category: 2,
  },
  {
    tag_name: 'Yellow',
    tag_category: 2,
  },
  {
    tag_name: 'Tan',
    tag_category: 2,
  },
  {
    tag_name: 'Baseball',
    tag_category: 4,
  },
  {
    tag_name: 'Basketball',
    tag_category: 4,
  },
  {
    tag_name: 'Bowling',
    tag_category: 4,
  },
  {
    tag_name: 'Cycling',
    tag_category: 4,
  },
  {
    tag_name: 'Fishing',
    tag_category: 4,
  },
  {
    tag_name: 'Football',
    tag_category: 4,
  },
  {
    tag_name: 'Golf',
    tag_category: 4,
  },
  {
    tag_name: 'Hockey',
    tag_category: 4,
  },
  {
    tag_name: 'Lacrosse',
    tag_category: 4,
  },
  {
    tag_name: 'Pickleball',
    tag_category: 4,
  },
  {
    tag_name: 'Soccer',
    tag_category: 4,
  },
  {
    tag_name: 'Softball',
    tag_category: 4,
  },
  {
    tag_name: 'Volleyball',
    tag_category: 4,
  },
  {
    tag_name: 'Sneakers',
    tag_category: 1,
  },
  {
    tag_name: 'Cleats',
    tag_category: 1,
  },
  {
    tag_name: 'Boots',
    tag_category: 1,
  },
  {
    tag_name: 'Sandals',
    tag_category: 1,
  },
  {
    tag_name: 'Slides',
    tag_category: 1,
  },
  {
    tag_name: 'Oxfords',
    tag_category: 1,
  },
  {
    tag_name: 'Dress',
    tag_category: 1,
  },
  {
    tag_name: 'Flats',
    tag_category: 1,
  },
  {
    tag_name: 'Slippers',
    tag_category: 1,
  },
  {
    tag_name: 'Heels',
    tag_category: 1,
  },
  {
    tag_name: 'X-Small',
    tag_category: 3,
  },
  {
    tag_name: 'Small',
    tag_category: 3,
  },
  {
    tag_name: 'Medium',
    tag_category: 3,
  },
  {
    tag_name: 'Large',
    tag_category: 3,
  },
  {
    tag_name: 'X-Large',
    tag_category: 3,
  },
  {
    tag_name: 'XX-Large',
    tag_category: 3,
  },
  {
    tag_name: 'XXX-Large',
    tag_category: 3,
  },
  {
    tag_name: '1',
    tag_category: 3,
  },
  {
    tag_name: '2',
    tag_category: 3,
  },
  {
    tag_name: '3',
    tag_category: 3,
  },
  {
    tag_name: '4',
    tag_category: 3,
  },
  {
    tag_name: '5',
    tag_category: 3,
  },
  {
    tag_name: '6',
    tag_category: 3,
  },
  {
    tag_name: '7',
    tag_category: 3,
  },
  {
    tag_name: '8',
    tag_category: 3,
  },
  {
    tag_name: '9',
    tag_category: 3,
  },
  {
    tag_name: '10',
    tag_category: 3,
  },
  {
    tag_name: '11',
    tag_category: 3,
  },
  {
    tag_name: '12',
    tag_category: 3,
  },
  {
    tag_name: '13',
    tag_category: 3,
  },
  {
    tag_name: '14',
    tag_category: 3,
  },
  {
    tag_name: "Men's",
    tag_category: 5,
  },
  {
    tag_name: "Women's",
    tag_category: 5,
  },
  {
    tag_name: "Boys'",
    tag_category: 5,
  },
  {
    tag_name: "Girls'",
    tag_category: 5,
  },
  {
    tag_name: 'Polos',
    tag_category: 6,
  },
  {
    tag_name: 'Tees',
    tag_category: 6,
  },
  {
    tag_name: 'Button-Ups',
    tag_category: 6,
  },
  {
    tag_name: 'Hoodies & Sweatshirts',
    tag_category: 6,
  },
  {
    tag_name: 'Q-Zips',
    tag_category: 6,
  },
  {
    tag_name: 'Outerwear',
    tag_category: 6,
  },
  {
    tag_name: 'Short-Sleeves',
    tag_category: 6,
  },
  {
    tag_name: 'Long-Sleeves',
    tag_category: 6,
  },
  {
    tag_name: 'Shorts',
    tag_category: 7,
  },
  {
    tag_name: 'Pants',
    tag_category: 7,
  },
  {
    tag_name: 'Jeans',
    tag_category: 7,
  },
  {
    tag_name: 'Joggers',
    tag_category: 7,
  },
  {
    tag_name: 'Lounge',
    tag_category: 7,
  },
  {
    tag_name: 'Leggings',
    tag_category: 7,
  },
  {
    tag_name: 'Loose',
    tag_category: 8,
  },
  {
    tag_name: 'Slim',
    tag_category: 8,
  },
  {
    tag_name: 'Fitted',
    tag_category: 8,
  },
  {
    tag_name: 'Adjustable',
    tag_category: 8,
  },
  {
    tag_name: 'Stretch',
    tag_category: 8,
  },
  {
    tag_name: 'Compression',
    tag_category: 8,
  },
  {
    tag_name: 'Wide',
    tag_category: 8,
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
