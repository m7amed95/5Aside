const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  league: {
    type: String,
    enum: ["PL", "Laliga", "Bundesliga", "league1"],
  },
  postion: {
    type: String,
    enum: ["GK", "DF", "MF", "WG", "ST"],
  },
  player: {
    type: String,
  },
});

module.exports = mongoose.model("Team", teamSchema);
