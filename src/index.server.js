const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const path = require("path");
const app = express();
const cors = require("cors");
env.config();

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", adminRoutes);
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

mongoose.connect(process.env.DB).then(() => {
  console.log("Database Connected");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port  ${process.env.PORT}`);
});
