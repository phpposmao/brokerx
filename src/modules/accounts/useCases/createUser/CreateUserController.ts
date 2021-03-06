import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  // eslint-disable-next-line class-methods-use-this
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ name, username, email, password });

    return response.status(201).send();
  }
}

export { CreateUserController };
