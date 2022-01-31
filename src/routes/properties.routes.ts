import { Router } from 'express';
import multer from 'multer';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

import { CreatePropertyController } from '../modules/properties/useCases/createProperty/CreatePropertyController';
import { CreatePropertySpecificationController } from '../modules/properties/useCases/createPropertySpecification/CreatePropertySpecificationController';
import { ListAvailablePropertiesController } from '../modules/properties/useCases/listAvailableProperties/ListAvailablePropertiesController';
import { UploadPropertyImageController } from '../modules/properties/useCases/uploadPropertyImage/UploadPropertyImageController';

const propertiesRoutes = Router();
const upload = multer(uploadConfig.upload('./tmp/properties'));

const createPropertyController = new CreatePropertyController();
const listAvailablePropertiesController = new ListAvailablePropertiesController();
const createPropertySpecificationController = new CreatePropertySpecificationController();
const uploadPropertyImageController = new UploadPropertyImageController();

propertiesRoutes.post('/', ensureAuthenticated, ensureAdmin, createPropertyController.handle);
propertiesRoutes.get('/available', listAvailablePropertiesController.handle);
propertiesRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createPropertySpecificationController.handle
);
propertiesRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadPropertyImageController.handle
);

export { propertiesRoutes };
