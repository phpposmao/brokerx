import { getRepository, Repository } from 'typeorm';
import { Property } from '../../../../database/entities/Property';
import { ICreatePropertyDTO } from '../../dtos/ICreatePropertyDTO';
import { IPropertiesRepository } from '../IPropertiesRepository';

class PropertiesRepository implements IPropertiesRepository {
  private repository: Repository<Property>;

  constructor() {
    this.repository = getRepository(Property);
  }

  async create({ name, cost, adress, postcode, category_id }: ICreatePropertyDTO): Promise<Property> {
    const property = this.repository.create({ name, cost, adress, postcode, category_id });

    await this.repository.save(property);

    return property;
  }

  async findByPostcode(postcode: number): Promise<Property> {
    const property = await this.repository.findOne({
      postcode,
    });

    return property;
  }
}

export { PropertiesRepository };
