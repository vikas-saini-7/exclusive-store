const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");

// get all orders
router.get("/", orderController.getAllOrders);

// user
// Create order
router.post("/", orderController.createOrder);

// Get order by user id
router.get("/user/:id", orderController.getOrdersByUser);

// Get order by id
router.get("/:id", orderController.getOrder);

// Update order by id
// router.put("/:id", orderController.updateOrder);

// Update order status
router.put("/:id/status", orderController.updateOrderStatus);

// update trackingId
router.put("/:id/tracking", orderController.updateTrackingId);

// Delete order by id
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
