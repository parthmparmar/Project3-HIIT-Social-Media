var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StatsSchema = new Schema({
  weight: { type: String, required: false },
  backsquat: String,
  cleanJerk: String,
  snatch: String,
  deadlift: String,
  maxPullUps: String,
  fran: String,
  grace: String,
  hellen: String,
  FiveK: String,
  FourHundredMeter: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

var Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
