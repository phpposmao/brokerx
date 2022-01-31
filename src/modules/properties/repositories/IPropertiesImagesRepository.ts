import { PropertyImage } from '../../../database/entities/PropertyImage';

interface IPropertiesImagesRepository {
  create(property_id: string, image_name: string): Promise<PropertyImage>;
}

export { IPropertiesImagesRepository };
