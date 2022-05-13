const { Schema, model } = require("mongoose");

const pilotSchema = new Schema(
  {
    name: String,
    age: Number,
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

model.exports = Pilot;
