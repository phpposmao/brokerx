import { Property } from '../../../../database/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';

class ListPropertiesUseCase {
  constructor(private propertiesRepository: IPropertiesRepository) {}

  async execute(): Promise<Property[]> {
    const properties = await this.propertiesRepository.findAvailable();
    return properties;
  }
}

export { ListPropertiesUseCase };
