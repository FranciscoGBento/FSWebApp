const mongoose = require("mongoose");
const Pilot = require("../models/Pilot.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/iron-gp";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const pilots = [
  {
    name: "Charles Leclerc",
    dateOfBirth: "16/10/1997",
    nationality: "Monaco",
    podiums: 17,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1646818893219.jpg",
  },

  {
    name: "Max Verstappen",
    dateOfBirth: "30/09/1997",
    nationality: Netherlands,
    podiums: 63,
    championships: 1,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1646819045507.jpg",
  },
  {
    name: "Sergio Perez",
    dateOfBirth: "26/01/1990",
    nationality: Mexico,
    podiums: 17,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1920.medium.jpg/1646819228700.jpg",
  },
  {
    name: "George Russell",
    dateOfBirth: "15/02/1998",
    nationality: "United Kingdom",
    podiums: 2,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1920.medium.jpg/1646750994602.jpg",
  },
  {
    name: "Carlos Sainz",
    dateOfBirth: "01/09/1994",
    nationality: "Spain",
    podiums: 9,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1920.medium.jpg/1646818866749.jpg",
  },
  {
    name: "Lewis Hamilton",
    dateOfBirth: "07/01/1985",
    nationality: "United Kingdom",
    podiums: 183,
    championships: 7,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1647334259839.jpg",
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
  {
    name: String,
    dateOfBirth: Number,
    nationality: String,
    podiums: Number,
    championships: Number,
    imageUrl: String,
  },
];
