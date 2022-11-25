const router = require("express").Router();

const apiRoutes = require('./api/index.js');
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require('./dashboard-routes.js');
const postRoutes = require('./post-routes');
const editPostRoutes = require('./edit-posts');
const authRoutes = require("./auth/index.js");


router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use("/auth", authRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/posts', postRoutes);
// router.use('/edit-posts',editPostRoutes);



router.use((req, res) => {
  res.status(404).render('404error');
});

module.exports = router;
