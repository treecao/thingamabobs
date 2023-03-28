const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Plain T-Shirt',
    img: '',
    descripton: '',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
