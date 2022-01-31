/* eslint-disable no-undef */
import { PropertiesRepositoryInMemory } from '../../repositories/in-memory/PropertiesRepositoryInMemory';
import { SpecificationsRepositoryInMemory } from '../../repositories/in-memory/SpecificationsRepositoryInMemory';
import { CreatePropertySpecificationUseCase } from './CreatePropertySpecificationUseCase';

let createPropertySpecificationUseCase: CreatePropertySpecificationUseCase;
let propertiesRepositoryInMemory: PropertiesRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe('Create property specification', () => {
  beforeEach(() => {
    propertiesRepositoryInMemory = new PropertiesRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createPropertySpecificationUseCase = new CreatePropertySpecificationUseCase(
      propertiesRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it('should be able to add a new specification to a property', async () => {
    const property = await propertiesRepositoryInMemory.create({
      name: 'Property Name',
      cost: 1000,
      adress: 'test street, test city, 77',
      postcode: 777777,
      category_id: 'category',
    });

    const specification = await specificationsRepositoryInMemory.create({ name: 'test', description: 'test' });

    const specifications_id = [specification.id];

    const specificationsProperties = await createPropertySpecificationUseCase.execute({
      property_id: property.id,
      specifications_id,
    });

    expect(specificationsProperties).toHaveProperty('specifications');
    expect(specificationsProperties.specifications.length).toBe(1);
  });

  it('should not be able to add a new specification to a non-existent property', async () => {
    expect(async () => {
      const property_id = '1234';
      const specifications_id = ['54321'];

      await createPropertySpecificationUseCase.execute({ property_id, specifications_id });
    }).rejects.toBeInstanceOf(Error);
  });
});
