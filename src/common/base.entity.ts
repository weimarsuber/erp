import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ unique: true })
  descripcion: string;
}