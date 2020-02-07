var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WodSchema = new Schema({
    title: String,
    wod: String,
    hotel: Boolean
});

var Wod = mongoose.model("Wod", WodSchema);

module.exports = Wod;