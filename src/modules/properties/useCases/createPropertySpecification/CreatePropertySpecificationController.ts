import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePropertySpecificationUseCase } from './CreatePropertySpecificationUseCase';

class CreatePropertySpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createPropertySpecificationUseCase = container.resolve(CreatePropertySpecificationUseCase);

    const properties = await createPropertySpecificationUseCase.execute({
      property_id: id,
      specifications_id,
    });

    return response.json(properties);
  }
}

export { CreatePropertySpecificationController };
