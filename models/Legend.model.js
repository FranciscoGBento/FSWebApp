const { Schema, model } = require("mongoose");

const legendSchema = new Schema(
  {
    name: String,
    dateOfBirth: String,
    nationality: String,
    championships: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const Legend = model("Legend", legendSchema);

module.exports = Legend;