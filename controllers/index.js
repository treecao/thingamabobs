const router = require('express').Router();
const homeRoutes = require('./homeroutes');
const apiRoutes = require("./api")
// const login = require("./homeroutes")
// const contact = require("./homeroutes")
// const cart = require("./homeroutes")


router.use('/', homeRoutes);
router.use("/api", apiRoutes)
// router.use("/login", login);
// router.use("/contact", contact);
// router.use("/cart", cart);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
