const mongoose = require("mongoose");
const Legend = require("../models/Legend.model");
require("dotenv/config");

const MONGODB_URI = process.env.MONGODB_URI;

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

const legends = [
  {
    name: "Nino Farina",
    dateOfBirth: "30/10/1906",
    nationality: "Italy",
    championships: "1950",
    imageUrl: "https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Nino_Farina/_jcr_content/image16x9.img.1536.high.jpg",
  },
  {
    name: "Juan Manuel Fangio",
    dateOfBirth: "24/06/1911",
    nationality: "Argentina",
    championships: "1951, 1954, 1955, 1956, 1957",
    imageUrl: "https://www.f1pt.pt/wp-content/uploads/2020/03/4nzvcmd9aua31.jpg",
  },
  {
    name: "Alberto Ascari",
    dateOfBirth: "13/07/1918",
    nationality: "Italy",
    championships: "1952, 1953",
    imageUrl: "http://4.bp.blogspot.com/_M9KQv88pcQU/S_xb3-HqTXI/AAAAAAAAcAw/GZiOAjJesQM/s1600/Espanha+54+2.jpg",
  },
  {
    name: "Jack Brabham",
    dateOfBirth: "02/03/1926",
    nationality: "Australia",
    championships: "1959, 1960, 1966",
    imageUrl: "https://www.razaoautomovel.com/wp-content/uploads/2017/06/jack-brabham_925x520_acf_cropped.png",
  },
  {
    name: "Graham Hill",
    dateOfBirth: "15/02/1929",
    nationality: "England",
    championships: "1962, 1963, 1964, 1965, 1966, 1967, 1968",
    imageUrl: "https://cdn-1.motorsport.com/static/img/amp/600000/650000/659000/659500/659508/s6_776794/indycar-indy-500-1966-graham-hill.jpg",
  },
  {
    name: "Jackie Stewart",
    dateOfBirth: "11/06/1939",
    nationality: "Scotland",
    championships: "1969, 1971, 1973",
    imageUrl: "https://static.wikia.nocookie.net/f1wikia/images/6/6f/73.jpg/revision/latest/top-crop/width/360/height/450?cb=20170617092218",
  },
  {
    name: "Emerson Fittipaldi",
    dateOfBirth: "12/12/1946",
    nationality: "Brazil",
    championships: "1972, 1974",
    imageUrl: "https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Emerson_Fittipaldi/_jcr_content/featureContent/manual_gallery/image3.img.jpg/1421235932907.jpg",
  },
  {
    name: "Niki Lauda",
    dateOfBirth: "22/02/1949",
    nationality: "Austria",
    championships: "1975, 1977, 1984",
    imageUrl: "https://flaviogomes.grandepremio.com.br/wp-content/uploads/2019/05/WRI_00001844-137.jpg",
  },
  {
    name: "James Hunt",
    dateOfBirth: "29/07/1947",
    nationality: "England",
    championships: "1976",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/James_Hunt_-_Dutch_GP_1976_crop_mod.jpg",
  },
  {
    name: "Nelson Piquet",
    dateOfBirth: "17/07/1952",
    nationality: "Brazil",
    championships: "1981, 1983, 1987",
    imageUrl: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQwHO5y_JO1cbckp2Wt4pAWLoPPpxKtiNljsCM59FEOOLerEXz7WjLvDnOJ0xRL",
  },
  {
    name: "Alain Prost",
    dateOfBirth: "24/02/1955",
    nationality: "France",
    championships: "1985, 1986, 1989, 1993",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Festival_automobile_international_2012_-_Photocall_-_Alain_Prost_-_013.jpg/220px-Festival_automobile_international_2012_-_Photocall_-_Alain_Prost_-_013.jpg",
  },
  {
    name: "Ayrton Senna",
    dateOfBirth: "21/03/1960",
    nationality: "Brazil",
    championships: "1988, 1990, 1991",
    imageUrl: "https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Ayrton_Senna/_jcr_content/featureContent/manual_gallery/image1.img.640.medium.jpg/1421858452652.jpg",
  },
  {
    name: "Nigel Mansell",
    dateOfBirth: "08/07/1953",
    nationality: "United Kingdom",
    championships: "1992",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Nigel_Mansell_-_Mexican_Grand_Prix_01.JPG",
  },
  {
    name: "Michael Schumacher",
    dateOfBirth: "03/01/1969",
    nationality: "Germany",
    championships: "1994, 1995, 2000, 2001, 2002, 2003, 2004",
    imageUrl: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2022/03/estado-de-saude-michael-schumacher-formula-1.jpg",
  },
  {
    name: "Mikka Hakkinen",
    dateOfBirth: "28/09/1968",
    nationality: "Finland",
    championships: "1998, 1999",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2016209185748_2016-07-27_Champions_for_Charity_-_Sven_-_1D_X_-_0226_-_DV3P4819_mod.jpg/800px-2016209185748_2016-07-27_Champions_for_Charity_-_Sven_-_1D_X_-_0226_-_DV3P4819_mod.jpg",
  },
];

Legend.create(legends)
  .then((createdLegends) => {
    console.log(`Created ${createdLegends.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));