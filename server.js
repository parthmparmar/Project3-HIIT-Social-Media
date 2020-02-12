require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const app = express();

const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wodbook", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});


// TEST PROTECT ROUTE
const isAuth = require("./auth/isAuth");

app.post('/protected', async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      res.send({
        data: 'This is protected data.',
      });
    }
  } catch (err) {
    res.send({
      error: `${err.message}`,
    });
  }
});

// Add routes
app.use(routes);

// Start  server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
