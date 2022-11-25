const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    console.log("here");
    const dbUserData = await User.create({
      //   username: req.body.username,
      user_name: req.body.user_name,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
    // console.log("check for login");
  try {
    
    const dbUserData = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const hashedPass = dbUserData.dataValues.password;
    bcrypt.compare(req.body.password, hashedPass, function (err, result) {
      if (!result) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }else{

      req.session.save(() => {
        req.session.loggedIn = true;

        res
          .status(200)
          .json({ user: dbUserData, message: "You are now logged in!" });
      });}
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
//   console.log(req.session);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
