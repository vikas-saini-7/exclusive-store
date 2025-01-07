const prisma = require("../prisma/client");

exports.addItem = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await prisma.cart.findFirst({ where: { userId } });

    if (!cart) {
      const newCart = await prisma.cart.create({
        data: {
          userId,
          items: { create: { productId } },
        },
        include: { items: { include: { product: true } } },
      });
      return res.status(201).json({
        message: "Cart created and item added",
        cart: newCart.items[0],
      });
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: { cartId: cart.id, productId },
    });

    if (existingItem) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + 1 },
        include: { product: true },
      });
      return res
        .status(200)
        .json({ message: "Item quantity updated", item: updatedItem });
    }

    const newItem = await prisma.cartItem.create({
      data: { cartId: cart.id, productId },
      include: { product: true },
    });

    res.status(201).json({ message: "Item added to cart", item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
};

exports.removeItem = async (req, res) => {
  const { userId, productId } = req.params;
  try {
    const cart = await prisma.cart.findFirst({
      where: { userId: parseInt(userId) },
    });

    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const existingItem = await prisma.cartItem.findFirst({
      where: { cartId: cart.id, productId: parseInt(productId) },
    });

    if (!existingItem)
      return res.status(404).json({ error: "Item not found in cart" });

    if (existingItem.quantity > 1) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity - 1 },
      });
      return res.status(200).json({
        message: "Item quantity decreased",
        itemId: parseInt(productId),
      });
    }

    await prisma.cartItem.delete({ where: { id: existingItem.id } });
    res
      .status(200)
      .json({ message: "Item removed from cart", itemId: parseInt(productId) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
};

exports.removeCartItem = async (req, res) => {
  const { userId, cartItemId } = req.params;
  try {
    const cart = await prisma.cart.findFirst({
      where: { userId: parseInt(userId) },
    });

    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const item = await prisma.cartItem.findFirst({
      where: { id: parseInt(cartItemId) },
    });

    if (!item) return res.status(404).json({ error: "Item not found" });

    await prisma.cartItem.delete({ where: { id: parseInt(cartItemId) } });
    res.status(200).json({
      message: "Item removed from cart",
      cartItemId: parseInt(cartItemId),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to remove cart item" });
  }
};

exports.clearCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await prisma.cart.findFirst({
      where: { userId: parseInt(userId) },
    });

    if (!cart) return res.status(404).json({ error: "Cart not found" });

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to clear cart" });
  }
};

exports.viewCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await prisma.cart.findFirst({
      where: { userId: parseInt(userId) },
      include: { items: { include: { product: true } } },
    });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json({ message: "Cart retrieved successfully", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};
