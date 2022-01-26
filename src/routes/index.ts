import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { propertiesRoutes } from './properties.routes';
import { specificationRoutes } from './specification.routes';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);
router.use('/users', userRoutes);
router.use(authenticateRoutes);
router.use('/properties', propertiesRoutes);

export { router };
