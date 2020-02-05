const router = require("express").Router();
// const passport = require("passport");
const userRoutes = require("./user");
// var app = require("express")();

// app.use(function (req, res, next) { passport.authenticate("local"); next(); });
router.use("/user", userRoutes);

module.exports = router;
