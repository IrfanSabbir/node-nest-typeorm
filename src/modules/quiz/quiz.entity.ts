import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: "Uniq Identifier"
  })
  id: number;

  @Column({
    type: "varchar"
  })
  title: string;

  @Column({
    type: "text"
  })
  description: string;


  @Column({
    type: "boolean",
    default: 1,
  })
  isActive: boolean;

}
