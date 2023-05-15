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
    const option = {
      projection: {
        title: 1,
        price: 1,
        service_id: 1,
        img: 1,
      },
    };
    // prettier-ignore
    const service = await client.db("CarDoctor").collection("Services").findOne(query, option);
    res.send(service);
  } catch (error) {
    res.status(404).send({ message: "Service not found" });
  }
});

app.post("/api/v1/orders", async (req, res) => {
  const body = req.body;
  // prettier-ignore
  try {
    const result = await client.db("CarDoctor").collection("orders").insertOne(body);
    res.send(result);
  } catch (error) {
    res.send({message: "Some went wrong"})
  }
});

app.get("/api/v1/orders", async (req, res) => {
  let query = {};

  if (req.query?.email) {
    query = { email: req.query.email };
  }

  const result = await client
    .db("CarDoctor")
    .collection("orders")
    .find(query)
    .toArray();
  res.send(result);
});

app.delete("/api/v1/orders/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  // prettier-ignore
  const result = await client.db(CarDoctor).collection("orders").deleteOne(query)
  res.send(result);
});

// RUN THE SERVER
client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Mongodb running on ${PORT}`);
  });
});
