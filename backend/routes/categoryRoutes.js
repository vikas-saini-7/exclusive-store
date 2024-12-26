const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController.js");

// get all categories
router.get("/", categoryController.getAllCategories);

// get category by id
router.get("/:id", categoryController.getCategoryById);

// create category
router.post("/", categoryController.createCategory);

// update category
router.put("/:id", categoryController.updateCategory);

// delete category
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
