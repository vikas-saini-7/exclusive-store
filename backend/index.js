const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

//json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type"); //, Authorization
  next();
});

//test
app.get("/test", (req, res) => {
  res.status(200).json({ message: "API working..." });
});

//listen
const PORT = process.env.PORT || 9000;
app.listen(9000, () => {
  console.log(`Server running on port ${PORT}`);
});
