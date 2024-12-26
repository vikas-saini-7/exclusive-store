const prisma = require("../prisma/client");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const category = await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
      },
    });

    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
