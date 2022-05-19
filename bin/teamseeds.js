const mongoose = require("mongoose");
const Team = require("../models/Team.model");
require("dotenv/config");


const MONGODB_URI = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI)

mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! My Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const teams = [
  {
    name: "Oracle Red Bull Racing",
    teamChief: "Christian Horner",
    championships: 4,
    country: "United Kingdom",
    firstEntry: "1997",
    imageUrlCar:
      "https://www.formula1.com/content/dam/fom-website/teams/2022/red-bull-racing.png.transform/6col-retina/image.png",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/logo.img.jpg/1645620474276.jpg",
  },
  {
    name: "Haas F1 Team",
    teamChief: "Guenther Steiner",
    championships: 0,
    country: "United States",
    firstEntry: "2016",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Haas-F1-Team/_jcr_content/logo.img.jpg/1646210673011.jpg",
  },
  {
    name: "BWT Alpine F1 Team",
    teamChief: "Otmar Szafnauer",
    championships: 2,
    country: "United Kingdom",
    firstEntry: "1986",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Alpine/_jcr_content/logo.img.jpg/1645620884650.jpg",
  },
  {
    name: "Mercedes-AMG Petronas F1 Team",
    teamChief: "Toto Wolff",
    championships: 8,
    country: "United Kingdom",
    firstEntry: "1970",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/logo.img.jpg/1582638425211.jpg",
  },
  {
    name: "Scuderia Ferrari",
    teamChief: "Guenther Steiner",
    championships: 16,
    country: "Italy",
    firstEntry: "1950",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/logo.img.jpg/1521797474166.jpg",
  },
  {
    name: "Scuderia AlphaTauri",
    teamChief: "Franz Tost",
    championships: 0,
    country: "Italy",
    firstEntry: "1985",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/AlphaTauri/_jcr_content/logo.img.jpg/1582650557134.jpg",
  },
  {
    name: "Williams Racing",
    teamChief: "Jost Capito",
    championships: 9,
    country: "United Kingdom",
    firstEntry: "1978",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Williams/_jcr_content/logo.img.jpg/1590743731407.jpg",
  },
  {
    name: "McLaren F1 Team",
    teamChief: "Andreas Seidl",
    championships: 8,
    country: "United Kingdom",
    firstEntry: "1966",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/logo.img.jpg/1644831223911.jpg",
  },
  {
    name: "Aston Martin Aramco Cognizant F1 Team",
    teamChief: "Mike Krack",
    championships: 0,
    country: "United Kingdom",
    firstEntry: "2018",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Aston-Martin/_jcr_content/logo.img.jpg/1645620644658.jpg",
  },
  {
    name: "Alfa Romeo F1 Team ORLEN",
    teamChief: "Frédéric Vasseur",
    championships: 0,
    country: "Switzerland",
    firstEntry: "1993",
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/teams/Alfa-Romeo-Racing/_jcr_content/logo.img.png/1643019381208.png",
  },
];


Team.create(teams)
  .then((createdTeams) => {
    console.log(`Created ${createdTeams.length} in the DB`);
    mongoose.disconnect(() => console.log('Disconnected from the db'));
  })
  .catch((err) => console.log(err));