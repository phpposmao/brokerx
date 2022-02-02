import { Rental } from '../../../database/entities/Rental';
import { ICreateRentalDTO } from '../dtos/ICreateRentalDTO';

interface IRentalsRepository {
  findOpenRentalByProperty(property_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create({ user_id, property_id }: ICreateRentalDTO): Promise<Rental>;
}

export { IRentalsRepository };
