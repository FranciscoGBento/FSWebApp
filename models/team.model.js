const { Schema, model } = require("mongoose");

const teamSchema = new Schema(
  {
    name: String,
    teamChief: String,
    championships: Number,
    country: String,
    firstEntry: Number,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Team = model("team", teamSchema);

module.exports = Team;
