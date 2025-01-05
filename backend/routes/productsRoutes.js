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

// get products by category
router.get("/category/:categoryId", productsController.getProductsByCategory);

// ############################
// SOME EXTRA ROUTES
// ############################

router.get("/featured", productsController.getFeaturedProducts);

router.get("/top-rated", productsController.getTopRatedProducts);

router.get("/best-selling", productsController.getBestSellingProducts);

router.get("/top-discounted", productsController.getTopDiscountedProducts); // working

module.exports = router;
