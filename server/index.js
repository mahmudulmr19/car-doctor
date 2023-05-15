const { MongoClient } = require("mongodb");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

/* CONFIGURATION */
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 6000;
const URL = process.env.MONGODB_URL;
const client = new MongoClient(URL);

// RUN THE SERVER
client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Mongodb running on ${PORT}`);
  });
});
