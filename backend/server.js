const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Premium Sofa", price: 559.99, image: "images/sofa.jpg" },
  { id: 2, name: "Classic Watch", price: 120.0, image: "images/watch.jpg" },
  { id: 3, name: "T-Shirt", price: 199.99, image: "images/tshirt.jpg" },
  { id: 1, name: "Smart Mobile", price: 559.99, image: "images/mobile.jpg" }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on http://0.0.0.0:5000");
});

