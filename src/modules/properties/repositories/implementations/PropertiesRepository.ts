import { getRepository, Repository } from 'typeorm';
import { Property } from '../../../../database/entities/Property';
import { ICreatePropertyDTO } from '../../dtos/ICreatePropertyDTO';
import { IPropertiesRepository } from '../IPropertiesRepository';

class PropertiesRepository implements IPropertiesRepository {
  private repository: Repository<Property>;

  constructor() {
    this.repository = getRepository(Property);
  }

  async create({
    name,
    cost,
    adress,
    postcode,
    category_id,
    specifications,
    id,
  }: ICreatePropertyDTO): Promise<Property> {
    const property = this.repository.create({ name, cost, adress, postcode, category_id, specifications, id });

    await this.repository.save(property);

    return property;
  }

  async findByPostcode(postcode: number): Promise<Property> {
    const property = await this.repository.findOne({
      postcode,
    });

    return property;
  }

  async findAvailable(category_id?: string): Promise<Property[]> {
    const propertiesQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (category_id) {
      propertiesQuery.andWhere('c.category_id = :category_id', { category_id });
    }

    const properties = await propertiesQuery.getMany();

    return properties;
  }

  async findById(id: string): Promise<Property> {
    const property = await this.repository.findOne(id);
    return property;
  }
}

export { PropertiesRepository };
