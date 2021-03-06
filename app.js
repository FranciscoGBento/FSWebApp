// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./config/session.config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "FSWebApp";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const teamsRoutes = require("./routes/team.routes");
app.use("/", teamsRoutes);

const pilotsRoutes = require("./routes/pilots.routes");
app.use("/", pilotsRoutes);

const calendarRoutes = require("./routes/calendar.routes");
app.use("/", calendarRoutes);

const standingsRoutes = require("./routes/standings.routes");
app.use("/", standingsRoutes);

const legendsRoutes = require("./routes/legends.routes");
app.use("/", legendsRoutes);

const profileRoutes = require("./routes/profile.routes");
app.use("/", profileRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
