const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    img: 'https://media.istockphoto.com/id/1277055921/photo/white-t-shirt-mockup-on-wood-background-template.jpg?b=1&s=170667a&w=0&k=20&c=_vJdzPoigOgDBaV43Z5sMsH_eA_zEjcs9xvVt4oL3ww=',
    description: 'This is your plain white t shirt',
    price: 14.99,
    stock: 14,
    category_id: 3,
  },
  {
    product_name: "Snoop Dogg's Blue Track Suit",
    img: 'https://www.hitjacket.com/wp-content/uploads/2022/02/Tracksuit-Snoop-Dogg-Super-Bowl-Halftime.jpg',
    description:
      'Original Sweat Suit worn by uncle Snoop as seen on the Super Bowl Halftime show',
    price: 3999999.99,
    stock: 1,
    category_id: 3,
  },

  {
    product_name: 'Edible Crayons',
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61eVTNqkzkL.jpg',
    description: 'Paint your mouth by chewing bubble yum',
    price: 49.99,
    stock: 400,
    category_id: 8,
  },

  {
    product_name: 'Melodikon',
    img: 'https://i.ytimg.com/vi/jVZOdtaUcrA/maxresdefault.jpg',
    description:
      'A very rare electronic music box made in the former East Germany. You know you need it.',
    price: 49999.99,
    stock: 1,
    category_id: 7,
  },

  {
    product_name: 'Wildebeest',
    img: 'https://a-z-animals.com/media/2022/09/iStock-1311054692-e1663786947729.jpg',
    description: "The pet you never knew you needed. You're very welcome",
    price: 249999.99,
    stock: 1,
    category_id: 9,
  },

  {
    product_name: "Ariel's Original Thingamabobs",
    img: 'https://pbs.twimg.com/media/BmB3ZT6IcAEI4_8?format=jpg&name=4096x4096',
    description: 'These thingamabobs will leave you wanting more',
    price: 29.99,
    stock: 20,
    category_id: 7,
  },
  {
    product_name: 'Soccer Ball',
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxwCkGuHY0_DniYkzaW6V0nThAap5H_jJttBz2dGPtdaqet4PmhK2JAjZwdvHyueXPPpuItnVHCQ&usqp=CAc',
    description: 'Kids Soccer Ball',
    price: 14.99,
    stock: 34,
    category_id: 1,
  },
  {
    product_name: 'Printer',
    img: 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/6734124/6734124_o01_brother_hl_l2305w_monochrome_black_and_white_laser_printer_030223/6734124',
    description: 'A very nice Laser Printer',
    price: 119.99,
    stock: 40,
    category_id: 2,
  },
  {
    product_name: 'Boba sweatshirt',
    img: 'https://i.etsystatic.com/34369617/r/il/770d5f/4301642170/il_794xN.4301642170_d8ey.jpg',
    description: 'A sweatshirt for all you boba lovers...',
    price: 19.99,
    stock: 100,
    category_id: 3,
  },
  {
    product_name: 'Big Red Boots',
    img: 'https://m.media-amazon.com/images/I/51eBfpucNaL._AC_UY575_.jpg',
    description: 'Inspired by Boots from Dora the explorer',
    price: 125.99,
    stock: 34,
    category_id: 4,
  },
  {
    product_name: 'Machete',
    img: 'https://images.thdstatic.com/productImages/38dea4a7-fedf-47f4-8695-adecdec69649/svn/tramontina-machetes-26621-218-64_300.jpg',
    description:
      'Great for dicing up veggies, shaving, or cutting steak. Did someone say Friday the 13th?',
    price: 12.99,
    stock: 13,
    category_id: 9,
  },
  {
    product_name: 'Teddy Bear',
    img: 'https://www.buildabear.com/on/demandware.static/-/Sites-buildabear-master/default/dwae8c6c2a/69231211226518x20714018.jpg',
    description: 'Classic brown teddy bear thats soft and fun to cuddle with.',
    price: 16.99,
    stock: 11,
    category_id: 8,
  },
  {
    product_name: 'High heels',
    img: 'https://i.ebayimg.com/images/g/iO0AAOSwyutcfoRp/s-l1600.jpg',
    description: '6 inch high heels',
    price: 42.99,
    stock: 21,
    category_id: 5,
  },
  {
    product_name: 'Lava Lamp',
    img: 'https://i5.walmartimages.com/asr/ed37360d-cc06-4e30-91b9-a500e458612d_1.07addd654576e99d43ea980217d73d57.jpeg',

    description: 'Lava lamp with golden shiny dust',
    price: 21.99,
    stock: 14,
    category_id: 8,
  },
  {
    product_name: 'Basketball',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png',
    description: 'Orange classic basketball',
    price: 14.99,
    stock: 8,
    category_id: 1,
  },
  {
    product_name: 'Hairbrush',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEGINGhf10OAxycv0PCs-Hmg7sVMod3vRng&usqp=CAU',
    description: 'Hairbrush to get your hair silky and smooth',
    price: 8.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Lamborghini Gallardo SuperLeggera',
    img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-lp-570-4-superleggera-edizione-tecnica/refresh/gallardo-lp-570-4-superleggera-edizione-tecnica-HEADER.jpg',
    description: 'This thing is fast.',
    price: 3500000.0,
    stock: 2,
    category_id: 6,
  },
  {
    product_name: '1992 Bentley Turbo R',
    img: 'https://cdn.dealeraccelerate.com/cam/34/2259/105910/1920x1440/1992-bentley-turbo-r',
    description: 'The ultimate classic',
    price: 1500000.0,
    stock: 1,
    category_id: 6,
  },
  {
    product_name: 'Tires',
    img: 'https://hips.hearstapps.com/hmg-prod/images/pile-of-tires-on-white-background-royalty-free-image-672151801-1561751929.jpg?resize=2048:*',
    description: 'These things roll.',
    price: 350.0,
    stock: 4,
    category_id: 6,
  },
  {
    product_name: 'Babe Ruth Baseball Card',
    img: 'https://robbreport.com/wp-content/uploads/2021/05/baberuth.jpg',
    description: 'The ultimate icon. 1933 edition.',
    price: 35000000.0,
    stock: 1,
    category_id: 7,
  },
  {
    product_name: 'Garden Hose',
    img: 'https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/6/3/63337_W3.jpg',
    description: 'A green watering machine.',
    price: 35.0,
    stock: 100,
    category_id: 9,
  },
  {
    product_name: 'PC',
    img: "https://i.ytimg.com/vi/XxOxaEZ6nRY/maxresdefault.jpg",
    description: 'extra most bestest pc',
    price: 100.00,
    stock: 10,
    category_id: 2,
    },
    
    {
    product_name: 'monitor',
    img: 'https://www.technewstoday.com/wp-content/uploads/2022/07/Best-Monitor-Settings-for-Eyes.jpg',
    description: 'extra most bestest monitor',
    price: 100.00,
    stock: 2,
    category_id: 2,
    },
    
    {
    product_name: 'mouse',
    img: "https://img.buzzfeed.com/buzzfeed-static/static/2018-07/9/17/asset/buzzfeed-prod-web-04/sub-buzz-21940-1531172100-2.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    description: 'extra most bestest mouse',
    price: 100.00,
    stock: 1,
    category_id: 9,
    },
    
    {
    product_name: 'keyboard',
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHKazKXSPVge4w_O9FBYKypAqpGJXeLdXgCriIHZekbY9I6mUW6Uw44c5cg4Fo_sBuaHwciK3EuJJ7O9Wrt2EClZxDayy2nsjnlKdeMphoXxcLb2A17NqCyA&usqp=CAE",
    description: 'extra most bestest keyboard',
    price: 100.00,
    stock: 2,
    category_id: 2,
    },
    
    {
    product_name: 'truck',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vCAo2-R4CnOBxiHrCJPDaq0WfYf65lHZtodJanr3Mw&usqp=CAU&ec=48665701",
    description: 'big ol truck!',
    price: 10.00,
    stock: 2,
    category_id: 6,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
