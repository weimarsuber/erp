import { Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('documentos')
export class Documento extends BaseEntity {}