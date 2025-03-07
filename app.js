const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const dotenv = require('dotenv');


app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
dotenv.config({ path: './config.env' });

app.use(express.static(path.join(__dirname, 'public')));  // Serve static files from the "public" folder

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.use("/api",routes);

module.exports = app;