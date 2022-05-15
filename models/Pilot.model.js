const { Schema, model } = require("mongoose");

const pilotSchema = new Schema(
  {
    name: String,
    dateOfBirth: String,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Pilot = model("Pilot", pilotSchema);

module.exports = Pilot;
