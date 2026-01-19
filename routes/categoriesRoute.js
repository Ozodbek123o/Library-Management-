import express from 'express';

export const categoriesRouter = express.Router();
import {
  getAllCategories,
  createCategory,
  deleteCategory,
} from '../controllers/categoriesControllers.js';

categoriesRouter.get('/', getAllCategories);

categoriesRouter.post('/', createCategory);

categoriesRouter.delete('/:id', deleteCategory);
