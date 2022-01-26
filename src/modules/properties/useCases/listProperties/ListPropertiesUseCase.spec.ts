/* eslint-disable no-undef */
import { PropertiesRepositoryInMemory } from '../../repositories/in-memory/PropertiesRepositoryInMemory';
import { ListPropertiesUseCase } from './ListPropertiesUseCase';

let listPropertiesUseCase: ListPropertiesUseCase;
let propertiesRepositoryInMemory: PropertiesRepositoryInMemory;

describe('List Properties', () => {
  beforeEach(() => {
    propertiesRepositoryInMemory = new PropertiesRepositoryInMemory();
    listPropertiesUseCase = new ListPropertiesUseCase(propertiesRepositoryInMemory);
  });

  it('should be able to list all available properties', async () => {
    await listPropertiesUseCase.execute();
  });
});
