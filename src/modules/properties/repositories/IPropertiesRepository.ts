import { Property } from '../../../database/entities/Property';
import { ICreatePropertyDTO } from '../dtos/ICreatePropertyDTO';

interface IPropertiesRepository {
  create(data: ICreatePropertyDTO): Promise<Property>;
  findByPostcode(postcode: number): Promise<Property>;
  findAvailable(category_id?: string): Promise<Property[]>;
  findById(id: string): Promise<Property>;
}

export { IPropertiesRepository };
