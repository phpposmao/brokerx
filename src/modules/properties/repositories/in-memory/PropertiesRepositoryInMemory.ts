import { Property } from '../../../../database/entities/Property';
import { ICreatePropertyDTO } from '../../dtos/ICreatePropertyDTO';
import { IPropertiesRepository } from '../IPropertiesRepository';

class PropertiesRepositoryInMemory implements IPropertiesRepository {
  properties: Property[] = [];

  async create({
    name,
    cost,
    adress,
    postcode,
    category_id,
    specifications,
    id,
  }: ICreatePropertyDTO): Promise<Property> {
    const property = new Property();

    Object.assign(property, { name, cost, adress, postcode, category_id, specifications, id });

    this.properties.push(property);

    return property;
  }

  async findByPostcode(postcode: number): Promise<Property> {
    return this.properties.find((property) => property.postcode === postcode);
  }

  async findAvailable(category_id?: string): Promise<Property[]> {
    const all = this.properties.filter((property) => {
      if (property.available === true || (category_id && property.category_id === category_id)) {
        return property;
      }
      return null;
    });

    return all;
  }

  async findById(id: string): Promise<Property> {
    return this.properties.find((property) => property.id === id);
  }
}

export { PropertiesRepositoryInMemory };
