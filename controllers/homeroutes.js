const router = require("express").Router();
const { Product, Category, Tag, TagCategory } = require("../models");
const withAuth = require("../utils/auth");

// route to get to landing HOME page

router.get("/", async (req, res) => {
  res.render("homepage", {
    username: req.session.username,
    loggedIn: req.session.logged_in,
  });
});

//route to login page
router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// route to user sign up
router.get("/sign-up", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

//route to shopping cart
router.get("/cart", withAuth, async (req, res) => {
  res.render("cart");
});

//route to profile
router.get("/profile", withAuth, async (req, res) => {});

//route to catalog
router.get("/catalog", async (req, res) => {
  try {
    const productData = await Product.findAll();

    const products = productData.map((product) => product.get({ plain: true }));
    console.log(products);
    res.render("catalog", {
      products,
      username: req.session.username,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to specific category in catalog
router.get("/catalog/category/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["product_name", "img", "price"] },
        { model: TagCategory, attributes: ["tag_category_name"] },
        { model: Tag, attributes: ["tag_name"] },
      ],
    });
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    console.log(categories);
    res.render("category", { categories });
  } catch (err) {
    res.status(500).json(err);
  }
});
//route to Contact page
router.get("/contact", async (req, res) => {
  res.render("contact");
});

//route to create Post to add to catalog
router.get("/sell", async (req, res) => {
  res.render("sell");
});

module.exports = router;
