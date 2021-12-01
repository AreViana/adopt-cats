import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ unique: true })
  @Generated('uuid')
  code: string;

  @Column({ default: false })
  isAdopted: boolean;
}
