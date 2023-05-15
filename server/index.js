const { MongoClient, ObjectId } = require("mongodb");
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

// ROUTES
app.get("/api/v1/services", async (req, res) => {
  const serviceCollection = await client
    .db("CarDoctor")
    .collection("Services")
    .find({})
    .toArray();

  res.send(serviceCollection);
});

app.get("/api/v1/services/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const query = { _id: new ObjectId(id) };
    const service = await client
      .db("CarDoctor")
      .collection("Services")
      .findOne(query);
    res.send(service);
  } catch (error) {
    res.status(404).send({ message: "Service not found" });
  }
});

// RUN THE SERVER
client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Mongodb running on ${PORT}`);
  });
});
