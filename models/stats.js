var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StatsSchema = new Schema({
  height: { type: Number},
  weight: { type: Number, required: false },
  backsquat: Number,
  cleanJerk: Number,
  snatch: Number,
  deadlift: Number,
  OverHeadPress: Number,
  maxPullUps: Number,
  fran: Number,
  grace: Number,
  hellen: Number,
  FiveK: Number,
  FourHundredMeter: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

var Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
