const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const shortId = require("shortid");
const path = require("path");

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose.connect(
  process.env.MONGDB_URL ||
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

const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortId.generate,
      },
      email: String,
      name: String,
      address: String,
      total: Number,
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);

app.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "Data is required." });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});

app.delete("/api/orders/:id", async (req, res) => {
  const orders = await Order.findByIdAndDelete(req.params.id);
  res.send(orders);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server at the http://localhost:5000"));
