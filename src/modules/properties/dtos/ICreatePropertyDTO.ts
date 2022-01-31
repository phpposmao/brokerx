import { Specification } from '../../../database/entities/Specification';

interface ICreatePropertyDTO {
  id?: string;
  name: string;
  cost: number;
  adress: string;
  postcode: number;
  category_id: string;
  specifications?: Specification[];
}

export { ICreatePropertyDTO };
