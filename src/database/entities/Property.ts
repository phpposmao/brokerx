import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Category } from './Category';

@Entity('properties')
class Property {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  available: boolean;

  @Column()
  adress: string;

  @Column()
  postcode: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { Property };
