import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'Uniq Identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;
}
