const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");

// create order
router.post("/create", orderController.createOrder);

// get all orders
router.get("/", orderController.getAllOrders);

// get order by id
router.get("/:id", orderController.getOrder);

// update order by id
router.put("/:id", orderController.updateOrder);

// update order status
router.put("/:id/status", orderController.updateOrderStatus);

// delete order by id
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
