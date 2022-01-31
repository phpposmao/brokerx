import { inject, injectable } from 'tsyringe';
import { Property } from '../../../../database/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';

interface IRequest {
  category_id?: string;
}

@injectable()
class ListAvailablePropertiesUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute({ category_id }: IRequest): Promise<Property[]> {
    const properties = await this.propertiesRepository.findAvailable(category_id);
    return properties;
  }
}

export { ListAvailablePropertiesUseCase };
