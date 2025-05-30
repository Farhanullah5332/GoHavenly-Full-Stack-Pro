const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userControllers = require("../Controllers/user");

router
  .route("/signUp")
  .get(userControllers.signupForm)
  .post(wrapAsync(userControllers.signup));

router
  .route("/login")
  .get(userControllers.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    wrapAsync(userControllers.login)
  );

router.get("/logout", userControllers.logout);

module.exports = router;
