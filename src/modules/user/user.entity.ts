import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles } from './enums/user.enum';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ description: 'Primary key as User ID', example: 1 })
  @PrimaryGeneratedColumn({
    comment: 'Uniq Identifier',
  })
  id: number;

  @ApiProperty({ description: 'User name', example: 'Jhon Doe' })
  @Column({
    type: 'varchar',
  })
  name: string;

  @ApiProperty({
    description: 'User email address',
    example: 'jhon.doe@gmail.com',
  })
  @Column({
    unique: true,
    type: 'varchar',
  })
  email: string;

  @ApiProperty({ description: 'Hashed user password' })
  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @ApiProperty({ description: 'When user was created' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'When user was Updated' })
  @UpdateDateColumn()
  updatedAt: Date;
}
