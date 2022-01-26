import { inject, injectable } from 'tsyringe';
import { Property } from '../../../../database/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';

interface IRequest {
  name: string;
  cost: number;
  adress: string;
  postcode: number;
  category_id: string;
}

@injectable()
class CreatePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute({ name, cost, adress, postcode, category_id }: IRequest): Promise<Property> {
    const propertyAlreadyExists = await this.propertiesRepository.findByPostcode(postcode);

    if (propertyAlreadyExists) {
      throw new Error('Property already exists!');
    }

    const property = await this.propertiesRepository.create({
      name,
      cost,
      adress,
      postcode,
      category_id,
    });

    return property;
  }
}

export { CreatePropertyUseCase };
