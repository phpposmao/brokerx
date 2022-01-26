import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreatePropertyController } from '../modules/properties/useCases/createProperty/CreatePropertyController';

const propertiesRoutes = Router();

const createPropertyController = new CreatePropertyController();

propertiesRoutes.post('/', ensureAuthenticated, ensureAdmin, createPropertyController.handle);

export { propertiesRoutes };
