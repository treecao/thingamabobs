const sequelize = require("./config/connection");
const express = require("express")
const exphbs = require("express-handlebars");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3301;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(require("./controllers"));


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening!'));
  });