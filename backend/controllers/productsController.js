const prisma = require("../prisma/client");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.getProductById = async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the product" });
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
    isActive,
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
        isActive,
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
    const product = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId: parseInt(categoryId),
      },
      include: {
        category: true,
      },
    });

    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

// ############################
// SOME EXTRA CONTROLLERS with limit 10
// ############################

// featured products
exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        isFeatured: true,
      },
      take: 10,
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

// top rated by rating
exports.getTopRatedProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        rating: "desc",
      },
      take: 10,
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

// best selling by sales
exports.getBestSellingProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        sales: "desc",
      },
      take: 10,
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

// top discounted by discount
exports.getTopDiscountedProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        discount: "desc",
      },
      take: 10,
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
