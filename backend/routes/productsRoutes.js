const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");

// get all products
router.get("/", productsController.getAllProducts);

// get product by id
router.get("/:id", productsController.getProductById);

// create product
router.post("/", productsController.createProduct);

// update product
router.put("/:id", productsController.updateProduct);

// delete product
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
