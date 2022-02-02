import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/properties/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/properties/repositories/implementations/CategoriesRepository';
import { ISpecificationRepository } from '../../modules/properties/repositories/ISpecificationRepository';
import { SpecificationsRepository } from '../../modules/properties/repositories/implementations/SpecificationsRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepositories';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepositories';
import { IPropertiesRepository } from '../../modules/properties/repositories/IPropertiesRepository';
import { PropertiesRepository } from '../../modules/properties/repositories/implementations/PropertiesRepository';
import { IPropertiesImagesRepository } from '../../modules/properties/repositories/IPropertiesImagesRepository';
import { PropertiesImagesRepository } from '../../modules/properties/repositories/implementations/PropertiesImagesRepository';
import { IRentalsRepository } from '../../modules/rentals/repositories/IRentalsRepository';
import { RentalsRepository } from '../../modules/rentals/repositories/implementations/RentalsRepository';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);

container.registerSingleton<ISpecificationRepository>('SpecificationsRepository', SpecificationsRepository);

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IPropertiesRepository>('PropertiesRepository', PropertiesRepository);

container.registerSingleton<IPropertiesImagesRepository>('PropertiesImagesRepository', PropertiesImagesRepository);

container.registerSingleton<IRentalsRepository>('RentalsRepository', RentalsRepository);
