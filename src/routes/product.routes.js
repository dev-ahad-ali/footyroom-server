import { Router } from 'express';
import { addProduct, getProduct } from '../controllers/product.controller.js';

const ProductRouter = Router();

ProductRouter.route('/add-product').post(addProduct);
ProductRouter.route('/get-product').get(getProduct);

export { ProductRouter };
