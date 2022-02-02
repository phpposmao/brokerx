import { inject, injectable } from 'tsyringe';
import { Rental } from '../../../database/entities/Rental';
import { IRentalsRepository } from '../repositories/IRentalsRepository';

interface IRequest {
  user_id: string;
  property_id: string;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalRepository: IRentalsRepository
  ) {}

  async execute({ user_id, property_id }: IRequest): Promise<Rental> {
    const propertyUnavailable = await this.rentalRepository.findOpenRentalByProperty(property_id);

    if (propertyUnavailable) {
      throw new Error('Property is unavailable');
    }

    const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(user_id);

    if (rentalOpenToUser) {
      throw new Error('There is no rental in progress for user!');
    }

    const rental = await this.rentalRepository.create({
      user_id,
      property_id,
    });

    return rental;
  }
}

export { CreateRentalUseCase };
