import { inject, injectable } from 'tsyringe';
import { Property } from '../../../../database/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  property_id: string;
  specifications_id: string[];
}

@injectable()
class CreatePropertySpecificationUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository,
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ property_id, specifications_id }: IRequest): Promise<Property> {
    const propertyExists = await this.propertiesRepository.findById(property_id);

    if (!propertyExists) {
      throw new Error('Property does not exists');
    }

    const specifications = await this.specificationsRepository.findByIds(specifications_id);

    await this.propertiesRepository.create(propertyExists);

    propertyExists.specifications = specifications;

    return propertyExists;
  }
}

export { CreatePropertySpecificationUseCase };
