import { Property } from '../../../../database/entities/Property';
import { ICreatePropertyDTO } from '../../dtos/ICreatePropertyDTO';
import { IPropertiesRepository } from '../IPropertiesRepository';

class PropertiesRepositoryInMemory implements IPropertiesRepository {
  properties: Property[] = [];

  async create({ name, cost, adress, postcode, category_id }: ICreatePropertyDTO): Promise<Property> {
    const property = new Property();

    Object.assign(property, { name, cost, adress, postcode, category_id });

    this.properties.push(property);

    return property;
  }

  async findByPostcode(postcode: number): Promise<Property> {
    return this.properties.find((property) => property.postcode === postcode);
  }

  async findAvailable(): Promise<Property[]> {
    return this.properties;
  }
}

export { PropertiesRepositoryInMemory };
