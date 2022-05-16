const mongoose = require("mongoose");
const Pilot = require("../models/Pilot.model");
require("dotenv/config");


const MONGO_URI = process.env.MONGODB_URI;

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
    nationality: "Netherlands",
    podiums: 63,
    championships: 1,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1646819045507.jpg",
  },
  {
    name: "Sergio Perez",
    dateOfBirth: "26/01/1990",
    nationality: "Mexico",
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
    name: "Lando Norris",
    dateOfBirth: "13/11/1999",
    nationality: "United Kingdom",
    podiums: 6,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1920.medium.jpg/1646819013197.jpg",
  },
  {
    name: "Valtteri Bottas",
    dateOfBirth: "28/08/1989",
    nationality: "Finland",
    podiums: 67,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1646819266274.jpg",
  },
  {
    name: "Esteban Ocon",
    dateOfBirth: "17/09/1996",
    nationality: "France",
    podiums: 2,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.1920.medium.jpg/1647334188097.jpg",
  },
  {
    name: "Kevin Magnussen",
    dateOfBirth: "05/10/1992",
    nationality: "Denmark",
    podiums: 1,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1920.medium.jpg/1647447969295.jpg",
  },
  {
    name: "Daniel Ricciardo",
    dateOfBirth: "01/07/1989",
    nationality: "Australia",
    podiums: 32,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1646818924510.jpg",
  },
  {
    name: "Yuki Tsunoda",
    dateOfBirth: "11/05/2000",
    nationality: "Japan",
    podiums: 0,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/yuki-tsunoda/_jcr_content/image.img.1920.medium.jpg/1648134405786.jpg",
  },
  {
    name: "Pierre Gasly",
    dateOfBirth: "07/02/1996",
    nationality: "France",
    podiums: 3,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1646819179303.jpg",
  },
  {
    name: "Sebastian Vettel",
    dateOfBirth: "03/07/1987",
    nationality: "Germany",
    podiums: 122,
    championships: 4,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1646818813887.jpg",
  },
  {
    name: "Alexander Albon",
    dateOfBirth: "23/03/1996",
    nationality: "Thailand",
    podiums: 2,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1920.medium.jpg/1646750995556.jpg",
  },
  {
    name: "Fernando Alonso",
    dateOfBirth: "29/07/1981",
    nationality: "Spain",
    podiums: 98,
    championships: 2,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/fernando-alonso/_jcr_content/image.img.1920.medium.jpg/1647334212592.jpg",
  },
  {
    name: "Lance Stroll",
    dateOfBirth: "29/10/1998",
    nationality: "Canada",
    podiums: 3,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1920.medium.jpg/1648135171947.jpg",
  },
  {
    name: "Zhou Guanyu",
    dateOfBirth: "30/05/1999",
    nationality: "China",
    podiums: 0,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/guanyu-zhou/_jcr_content/image.img.1920.medium.jpg/1646818979975.jpg",
  },
  {
    name: "Mick Schumacher",
    dateOfBirth: "22/03/1999",
    nationality: "Germany",
    podiums: 0,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/mick-schumacher/_jcr_content/image.img.1920.medium.jpg/1647334235171.jpg",
  },
  {
    name: "Nico Hulkenberg",
    dateOfBirth: "19/08/1987",
    nationality: "Germany",
    podiums: 0,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col-retina/image.png",
  },
  {
    name: "Nicholas Latifi",
    dateOfBirth: "29/06/1995",
    nationality: "Canada",
    podiums: 0,
    championships: 0,
    imageUrl:
      "https://www.formula1.com/content/fom-website/en/drivers/nicholas-latifi/_jcr_content/image.img.1920.medium.jpg/1646819118069.jpg",
  },
];

Pilot.create(pilots)
  .then((createdPilots) => {
    console.log(`Created ${createdPilots.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
