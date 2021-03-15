const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../models/user.model");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

passport.use(
  "sign-up",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      UserModel.create({ email, password }, (err, user) => {
        if (err) {
          done(err);
        } else {
          done(null, user);
        }
      });
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => { 
      UserModel.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: "User not found" });
        user.isValidPassword(password).then((isValid) => {
          if (isValid) {
            done(null, user, { message: "Logged in Successfully" });
          } else {
            done(null, false, { message: "Wrong Password" });
          }
        });
      });
    }
  )
);

router.post(
  "/sign-up",
  passport.authenticate("sign-up", { session: false }),
  (req, res) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

router.post("/login", (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err || !user) {
      const error = new Error("An error occurred.");
      next(error);
      return
    }
    req.login(user, { session: false }, (err) => {
      if (err) return next(err);
      const body = { _id: user._id, email: user.email, name: user.name };
      const token = jwt.sign(body, "SUPER_SECRET");
      res.json({ token });
    });
  })(req, res, next);
});
module.exports = router;

// token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQ5Y2YzNTdmNTFiZjVhNzQyZGEwZGYiLCJlbWFpbCI6ImpAZy5jb20iLCJpYXQiOjE2MTU0NDk5NTZ9.d0kpAZz-QAvBEhwg7JaiJS4yZ1F31KdGlrmqoNVa6fg
