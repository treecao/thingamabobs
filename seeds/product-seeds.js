const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    img: 'https://media.istockphoto.com/id/1277055921/photo/white-t-shirt-mockup-on-wood-background-template.jpg?b=1&s=170667a&w=0&k=20&c=_vJdzPoigOgDBaV43Z5sMsH_eA_zEjcs9xvVt4oL3ww=',
    description: 'This is your plain white t shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
