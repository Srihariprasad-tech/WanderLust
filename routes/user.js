const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usercontroller=require("../controllers/user.js");

// Signup Page
router.get("/signup", usercontroller.renderSignupForm);

// Signup Route
router.post("/signup", usercontroller.signup);

//login page
router.get("/login",usercontroller.renderLoginForm);

// Login Route
router.post("/login",saveRedirectUrl, usercontroller.login);

// Logout Route
router.get("/logout",usercontroller.logout);


module.exports = router;