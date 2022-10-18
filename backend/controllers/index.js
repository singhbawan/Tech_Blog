const router = require("express").Router();

const apiRoutes = require('./api/index.js');
const homeRoutes = require("./home-routes.js");
const authRoutes = require("./auth/index.js");


router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use("/auth", authRoutes);



router.use((req, res) => {
  res.status(404).render('404error');
});

module.exports = router;
