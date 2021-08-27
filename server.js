const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const shortId = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.bxqvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortId.generate },
    title: String,
    description: String,
    image: String,
    price: String,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProducts = await newProduct.save();
  res.send(savedProducts);
});

app.delete("/api/products/:id", async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server at the http://localhost:5000"));
