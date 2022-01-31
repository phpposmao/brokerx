import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadPropertyImageUseCase } from './UploadPropertyImageUseCase';

interface IFiles {
  filename: string;
}

class UploadPropertyImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadPropertyImageUseCase = container.resolve(UploadPropertyImageUseCase);

    const images_name = images.map((file) => file.filename);

    await uploadPropertyImageUseCase.execute({
      property_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export { UploadPropertyImageController };
