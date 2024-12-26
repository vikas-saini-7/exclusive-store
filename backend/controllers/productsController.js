const prisma = require("../prisma/client");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    discount,
    stock,
    sku,
    imageUrl,
    categoryId,
  } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        discount,
        stock,
        sku,
        imageUrl,
        categoryId: parseInt(categoryId),
      },
    });

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    price,
    discount,
    stock,
    sku,
    imageUrl,
    categoryId,
  } = req.body;

  try {
    const product = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        description,
        price,
        discount,
        stock,
        sku,
        imageUrl,
        categoryId: parseInt(categoryId),
      },
    });

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
