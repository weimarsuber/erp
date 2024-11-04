import { Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('colores')
export class Color extends BaseEntity {}