import Category from "../models/category.js";

const addCategory = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).send("Name and description are required"); 
  }

  const isExists = await Category.findOne({ name });
  if (isExists) {
    return res.status(409).send("Category with that name already exists"); 
  }

  try {
    await Category.create(req.body);
    return res.status(201).send("New category created successfully"); 
  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).send("Internal server error"); 
  }
};

const getCategory = async (req, res) => {
  const categories = await Category.find({});

  return res.status(200).send(categories);
};

export  { addCategory, getCategory };
