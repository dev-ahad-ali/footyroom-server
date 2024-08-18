import { Router } from 'express';
import { addProduct, getBrands, getProduct } from '../controllers/product.controller.js';

const ProductRouter = Router();

ProductRouter.route('/add-product').post(addProduct);
ProductRouter.route('/get-product').get(getProduct);
ProductRouter.route('/get-brands').get(getBrands);

export { ProductRouter };
