import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateCategoryController } from '../modules/properties/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/properties/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.use(ensureAdmin);
categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);

export { categoriesRoutes };
