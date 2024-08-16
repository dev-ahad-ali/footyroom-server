import { Product } from '../models/product.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { methodHandler } from '../utils/methodHandler.js';

const addProduct = methodHandler(async (req, res) => {
  const { name, image, description, price, rating, category } = req.body;

  const isAllValueAvailable = [name, image, description, price, rating, category].every(Boolean);

  if (!isAllValueAvailable) {
    throw new ApiError(400, 'All fields are required');
  }

  const product = await Product.create({
    name,
    image,
    description,
    price,
    rating,
    category,
  });

  const addedProductName = await Product.findById(product._id).select('name');

  if (!addedProductName) throw new ApiError(500, 'Something went wrong while saving the product');

  return res.status(200).json(new ApiResponse(200, addedProductName, 'Product added successfully'));
});

export { addProduct };
