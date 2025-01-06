const prisma = require("../prisma/client");

exports.addItem = async (req, res) => {
  const { userId, productId } = req.body;
  const cart = await prisma.cart.findFirst({
    where: {
      userId: userId,
    },
  });

  if (!cart) {
    const newCart = await prisma.cart.create({
      data: {
        userId: userId,
        items: {
          create: {
            productId: productId,
          },
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    return res.json(newCart);
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: productId,
    },
  });

  if (existingItem) {
    const updatedItem = await prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: existingItem.quantity + 1,
      },
      include: {
        product: true,
      },
    });
    return res.json(updatedItem);
  }

  const newItem = await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId: productId,
    },
    include: {
      product: true,
    },
  });

  res.json(newItem);
};

exports.removeItem = async (req, res) => {
  const { userId, productId } = req.params;
  const cart = await prisma.cart.findFirst({
    where: {
      userId: userId,
    },
  });

  if (!cart) {
    return res.status(404).json({ error: "Cart not found" });
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: productId,
    },
  });

  if (!existingItem) {
    return res.status(404).json({ error: "Item not found in cart" });
  }

  if (existingItem.quantity > 1) {
    const updatedItem = await prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: existingItem.quantity - 1,
      },
      include: {
        product: true,
      },
    });
    return res.json(updatedItem);
  }

  await prisma.cartItem.delete({
    where: {
      id: existingItem.id,
    },
  });

  res.json({ message: "Item removed from cart" });
};

exports.removeCartItem = async (req, res) => {
  const { userId, cartItemId } = req.params;
  const cart = await prisma.cart.findFirst({
    where: {
      userId: parseInt(userId),
    },
  });

  if (!cart) {
    return res.status(404).json({ error: "Cart not found" });
  }

  const item = await prisma.cartItem.findFirst({
    where: {
      id: parseInt(cartItemId),
    },
  });

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  await prisma.cartItem.delete({
    where: {
      id: parseInt(cartItemId),
    },
  });

  res.json({ message: "Item removed from cart" });
};

exports.clearCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await prisma.cart.findFirst({
    where: {
      userId: parseInt(userId),
    },
  });

  if (!cart) {
    return res.status(404).json({ error: "Cart not found" });
  }

  await prisma.cartItem.deleteMany({
    where: {
      cartId: cart.id,
    },
  });

  res.json({ message: "Cart cleared" });
};

exports.viewCart = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const cart = await prisma.cart.findFirst({
    where: {
      userId: parseInt(userId),
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart) {
    return res.status(404).json({ error: "Cart not found" });
  }

  res.json(cart);
};
