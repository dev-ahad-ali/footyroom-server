import { Router } from 'express';
import { addProduct } from '../controllers/product.controller.js';

const ProductRouter = Router();

ProductRouter.route('/add-product').post(addProduct);

export { ProductRouter };
