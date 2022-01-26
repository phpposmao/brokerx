/* eslint-disable no-undef */
import { PropertiesRepositoryInMemory } from '../../repositories/in-memory/PropertiesRepositoryInMemory';
import { CreatePropertyUseCase } from './CreatePropertyUseCase';

let createPropertyUseCase: CreatePropertyUseCase;
let propertiesRepositoryInMemory: PropertiesRepositoryInMemory;

describe('Create Property', () => {
  beforeEach(() => {
    propertiesRepositoryInMemory = new PropertiesRepositoryInMemory();
    createPropertyUseCase = new CreatePropertyUseCase(propertiesRepositoryInMemory);
  });

  it('should be able to create a new property', async () => {
    const property = await createPropertyUseCase.execute({
      name: 'Property Name',
      cost: 1000,
      adress: 'test street, test city, 77',
      postcode: 777777,
      category_id: 'category',
    });

    expect(property).toHaveProperty('id');
  });

  it('should not be able to create a property with already registered postcode', () => {
    expect(async () => {
      await createPropertyUseCase.execute({
        name: 'Property Name',
        cost: 1000,
        adress: 'test street, test city, 77',
        postcode: 777777,
        category_id: 'category',
      });

      await createPropertyUseCase.execute({
        name: 'Property Name',
        cost: 1000,
        adress: 'test street, test city, 77',
        postcode: 777777,
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create a property with available true by default', async () => {
    const property = await createPropertyUseCase.execute({
      name: 'Property Name',
      cost: 1000,
      adress: 'test street, test city, 77',
      postcode: 777777,
      category_id: 'category',
    });

    expect(property.available).toBe(true);
  });
});
