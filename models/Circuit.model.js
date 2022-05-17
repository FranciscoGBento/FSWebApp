const { Schema, model } = require("mongoose");

const circuitSchema = new Schema(
  {
    name: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Circuit = model("Circuit", circuitSchema);

module.exports = Circuit;
