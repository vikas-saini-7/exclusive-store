const express = require("express");
const { PrismaClient } = require("@prisma/client");

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const wishlistRoutes = require("./routes/wishlistRoutes.js");

const app = express();

//json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// app.use(cors());

//test
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "API working perfectly..." });
});

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/products", productsRoutes);

app.use("/api/wishlist", wishlistRoutes);

//listen
const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
  console.log(`Server running on port ${PORT}`);
});
