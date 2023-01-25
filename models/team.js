const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  age: {
    type: Number,

    min: 20,
    max: 35,
  },
  ethnicity: {
    type: String,
  },
});

const teamSchema = new Schema({
  Kit: {
    type: String,
    enum: ["Red", "Blue", "Green", "White"],
  },
  GK: {
    type: String,
    enum: ["Thibaut Courtois", "Manuel Neuer", "Alisson"],
  },
  DF: {
    type: String,
    enum: ["Virgil Van dijk", "Marquinhos", "Ruben Dias"],
  },
  MF: {
    type: String,
    enum: ["Kevin de Bruyne", "Luka Modric", "Kante"],
  },
  WG: {
    type: String,
    enum: ["Neymar", "Sadio Mane", "Lionel Messi"],
  },
  ST: {
    type: String,
    enum: ["Cristiano Ronaldo", "Karim Benzema", "Kylian Mbappe"],
  },
  players: [playerSchema],
});

module.exports = mongoose.model("Team", teamSchema);
