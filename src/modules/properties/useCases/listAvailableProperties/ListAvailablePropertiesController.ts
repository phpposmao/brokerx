import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailablePropertiesUseCase } from './ListAvailablePropertiesUseCase';

class ListAvailablePropertiesController {
  async handle(request: Request, response: Response) {
    const { category_id } = request.query;

    const listAvailablePropertiesUseCase = container.resolve(ListAvailablePropertiesUseCase);

    const properties = await listAvailablePropertiesUseCase.execute({
      category_id: category_id as string,
    });

    return response.json(properties);
  }
}

export { ListAvailablePropertiesController };
