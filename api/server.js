require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chatRoutes = require("./chatRoutes.jsx");
const emailRoutes = require("./emailRoutes.jsx");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);
app.use("/api", emailRoutes);

module.exports = (req, res) => {
  app(req, res); // Call Express app as a Vercel serverless function
};
