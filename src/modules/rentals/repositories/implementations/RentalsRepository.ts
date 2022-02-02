import { getRepository, Repository } from 'typeorm';
import { Rental } from '../../../../database/entities/Rental';
import { ICreateRentalDTO } from '../../dtos/ICreateRentalDTO';
import { IRentalsRepository } from '../IRentalsRepository';

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async findOpenRentalByProperty(property_id: string): Promise<Rental> {
    const openByProperty = await this.repository.findOne({ property_id });

    return openByProperty;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({ user_id });
    return openByUser;
  }

  async create({ user_id, property_id }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      property_id,
      user_id,
    });

    await this.repository.save(rental);

    return rental;
  }
}

export { RentalsRepository };
