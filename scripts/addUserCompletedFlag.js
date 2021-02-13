/* This script creates a new field call: 'isUserProfileComplete: true'. 
   The field is created to check if the user has completed all required information.
*/

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wodbook", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.User.updateMany(
  { firstName: /^$|\S+/ },
  { $set: { isUserProfileComplete: true } }
)
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
