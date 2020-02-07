const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/wodbook"
);

const WodSeed = [
  {
    title: "LINE DRIVE",
    wod: "Metcon: 20-min EMOM 1.) Ski Erg/C2 Bike  2.) D-Ball OTS 3.) DB Lunge 4.) Bar Muscle-Up",
    hotel: false
  },
  {
    title: "DARK HORSE",
    wod: "Against 16-mins… 3 Rounds For Time! 40 Double Unders 30/24 Cal. Row 20 Box Jump Overs 10 HSPU ",
    hotel: false
  },
  {
    title: "SUIT & TIE",
    wod: "Death by: Take 75% of weight found above. (x)-min Time-Cap Minute 1: 4 Power Cleans + 1 DB Snatch Minute 2: 4 Power Cleans + 2 DB Snatch Each minute: clean reps stay the same, while DB Snatch reps increase by 1-rep. ",
    hotel: false
  },
  {
    title: "COAST TO COAST",
    wod: "For (4) Rounds… 3-min Work/1-min Rest (AMRAP) 7 T2B 7 Thrusters 7 Bar Facing Burpees ",
    hotel: false
  },
  {
    title: "POWER HOUR",
    wod: "Against 15-mins… For Time! 45 Deadlifts 30 Hang Cleans 15 S2OH 800m Run 15 S2OH 30 Hang Cleans 45 Deadlifts ",
    hotel: false
  },
  {
    title: "DOWN THE MIDDLE",
    wod: "Every 5 minutes for 5 rounds: 400m Run 20 American Kettlebell Swings 15 CTB Pull-ups ",
    hotel: false
  },
  {
    title: "TIP TOE",
    wod: "Against 10-mins… 3 Rounds For Time! 9/7 Cal. Bike 200m Run 8  Hang DB Snatches (Alt.) 8 Hang DB Clean and Jerks (Alt.)",
    hotel: false
  },
  
];

db.Wod
  .remove({})
  .then(() => db.Wod.collection.insertMany(WodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
