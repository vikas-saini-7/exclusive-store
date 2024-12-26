const prisma = require("../prisma/client");

exports.createOrder = async (req, res) => {
  const { userId, addressId, paymentMethod } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        userId,
        addressId,
        paymentMethod,
      },
    });
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: Number(userId),
      },
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { userId, addressId, paymentMethod, status } = req.body;
  try {
    const order = await prisma.order.update({
      where: {
        id: Number(id),
      },
      data: {
        userId,
        addressId,
        paymentMethod,
        status,
      },
    });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await prisma.order.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.order.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
