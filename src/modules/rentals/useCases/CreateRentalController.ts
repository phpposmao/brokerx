import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRentalUseCase } from './CreateRentalUseCase';

class CreateRentalController {
  async handle(request: Request, response: Response) {
    const { property_id } = request.body;
    const { id } = request.user;

    const createRentalUseCase = container.resolve(CreateRentalUseCase);

    const rental = await createRentalUseCase.execute({
      property_id,
      user_id: id,
    });

    return response.status(201).json(rental);
  }
}

export { CreateRentalController };
