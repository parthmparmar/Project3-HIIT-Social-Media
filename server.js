const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
const app = express();
// const User = require("./models/User");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// PASSPORT CONFIGURATION
// app.use(require("express-session")({
//     secret: "Once again Rusty wins cutest dog!",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(function(req, res, next){
//    res.locals.currentUser = req.user;
//    next();
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wodbook", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
