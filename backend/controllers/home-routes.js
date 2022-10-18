const router = require('express').Router();
const moment = require('moment');
const { Post, Comment, User } = require("../models/index.js")

router.get("/", (req, res) => {
    res.redirect('/dashboard')
  });


  
//get all posts for dashboard
router.get("/dashboard", async (req, res) => {

  try {
    const postsData = await Post.findAll({
      logging: console.log, // log SQL statement to console
      include: [
        { model: Comment, include: [{ model: User, as: "user" }, { model: Post, as: "post" }] },
        {
          model: User, as: "user"
        }
      ],
    })

    let posts = postsData.map((post) =>
      post.get({ raw: true })
    );
    posts = posts.map((post) => {

      let a = moment(post.date_created);
      let b = moment();
      post["dayselapsed"] = Math.abs(a.diff(b, 'days'))? `${Math.abs(a.diff(b, 'days'))} days ago` : "today";
      return post;
    }
    );
    let loggedIn;
    if (req.session.loggedIn) {
    //   console.log(req.session)
      loggedIn = true;

    }
    let username;
    if (req.session.user_id) {

      username = await User.findOne({ where: { user_id: req.session.user_id } })
      username = username.dataValues.user_name
    }

    res.render('dashboard', {
      posts, loggedIn, username
    })



  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }

});
