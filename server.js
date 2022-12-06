const express = require('express');
const app = express();
const routes = require('./backend/controllers/index');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./backend/config/connection");
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const path = require('path');


const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const PORT = process.env.PORT || 3002;

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend/public')));

app.use(require('./backend/controllers/index'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening at port ", PORT));
});
