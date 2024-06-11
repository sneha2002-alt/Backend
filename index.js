const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const product_data = require("./products.json");

const PORT = process.env.PORT;

app.get("/products", (req, res) => {
  res.json(product_data);
});

app.listen(PORT, () => {
  console.log(`Server start on Port: ${PORT}`);
});
