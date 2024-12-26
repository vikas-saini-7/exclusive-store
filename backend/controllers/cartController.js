const prisma = require("../prisma/client");

// model Cart {
//     id        Int        @id @default(autoincrement())
//     userId    Int        @unique
//     user      User       @relation(fields: [userId], references: [id])
//     items     CartItem[]
//     createdAt DateTime   @default(now())
//     updatedAt DateTime   @updatedAt
//   }

//   model CartItem {
//     id        Int     @id @default(autoincrement())
//     cartId    Int
//     productId Int
//     quantity  Int     @default(1)
//     cart      Cart    @relation(fields: [cartId], references: [id])
//     product   Product @relation(fields: [productId], references: [id])

//     createdAt DateTime @default(now())

//     @@unique([cartId, productId]) // Prevent duplicate product entries in the cart
//   }

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
  const { userId, productId } = req.body;
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

exports.viewCart = async (req, res) => {
  const { userId } = req.body;
  const cart = await prisma.cart.findFirst({
    where: {
      userId: userId,
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
