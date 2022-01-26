import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePropertyUseCase } from './CreatePropertyUseCase';

class CreatePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cost, adress, postcode, category_id } = request.body;

    const createPropertyUseCase = container.resolve(CreatePropertyUseCase);

    const property = await createPropertyUseCase.execute({ name, cost, adress, postcode, category_id });

    return response.status(201).json(property);
  }
}

export { CreatePropertyController };
