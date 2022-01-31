/* eslint-disable no-undef */
import { PropertiesRepositoryInMemory } from '../../repositories/in-memory/PropertiesRepositoryInMemory';
import { ListAvailablePropertiesUseCase } from './ListAvailablePropertiesUseCase';

let listAvailablePropertiesUseCase: ListAvailablePropertiesUseCase;
let propertiesRepositoryInMemory: PropertiesRepositoryInMemory;

describe('List Properties', () => {
  beforeEach(() => {
    propertiesRepositoryInMemory = new PropertiesRepositoryInMemory();
    listAvailablePropertiesUseCase = new ListAvailablePropertiesUseCase(propertiesRepositoryInMemory);
  });

  it('should be able to list all available properties', async () => {
    const property = await propertiesRepositoryInMemory.create({
      name: 'Test House',
      cost: 12321,
      adress: 'Test Street, Test City, Number 743 - Brazil',
      postcode: 12325321,
      category_id: 'category_id',
    });

    const properties = await listAvailablePropertiesUseCase.execute({});

    expect(properties).toEqual([property]);
  });

  it('should be able to list all available properties by category', async () => {
    const property = await propertiesRepositoryInMemory.create({
      name: 'Test House',
      cost: 12321,
      adress: 'Test Street, Test City, Number 743 - Brazil',
      postcode: 12325321,
      category_id: 'category_id',
    });

    const properties = await listAvailablePropertiesUseCase.execute({ category_id: 'category_id' });

    expect(properties).toEqual([property]);
  });
});
