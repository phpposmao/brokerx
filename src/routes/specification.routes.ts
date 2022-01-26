import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/properties/useCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.use(ensureAdmin);
specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
