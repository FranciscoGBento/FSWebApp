const mongoose = require("mongoose");
const Circuit = require("../models/Circuit.model");
require("dotenv/config");

const MONGODB_URI = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);

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

const circuits = [
  {
    name: "Albert Park Grand Prix Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit of the Americas",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/USA%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Bahrain International Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Baku City Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit de Barcelona-Catalunya",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Hungaroring",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Autodromo Enzo e Dino Ferrari",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Autódromo José Carlos Pace",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Jeddah Corniche Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Marina Bay Street Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapor%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Miami International Autodrome",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit de Monaco",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Autodromo Nazionale di Monza",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Red Bull Ring",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit Paul Ricard",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/France%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Autódromo Hermanos Rodríguez",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Silverstone Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit de Spa-Francorchamps",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Suzuka Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit Gilles Villeneuve",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Yas Marina Circuit",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhab%20carbon.png.transform/3col-retina/image.png",
  },
  {
    name: "Circuit Park Zandvoort",
    imageUrl:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png.transform/3col-retina/image.png",
  },
];
Circuit.create(circuits)
  .then((createdCircuits) => {
    console.log(`Created ${createdCircuits.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
