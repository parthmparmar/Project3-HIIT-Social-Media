const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const passport = require("passport");

// router.use("/api/users/login", passport.authenticate("local"), function(req, res) {
//   res.end();
// });

// router.get("/logout", function(req, res) {
//   console.log("Hit logout route");
// 	req.logout();
// });

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
