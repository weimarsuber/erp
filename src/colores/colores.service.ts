import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './colores.entity';

@Injectable()
export class ColoresService {
  constructor(
    @InjectRepository(Color)
    private coloresRepository: Repository<Color>,
  ) {}

  findAll(): Promise<Color[]> {
    return this.coloresRepository.find();
  }

  async findOne(id: number): Promise<Color> {
    const color = await this.coloresRepository.findOne({ where: { codigo: id } });
    if (!color) {
      throw new NotFoundException(`Color with ID ${id} not found`);
    }
    return color;
  }

  create(color: Color): Promise<Color> {
    return this.coloresRepository.save(color);
  }

  async update(id: number, color: Color): Promise<Color> {
    await this.findOne(id);
    await this.coloresRepository.update(id, color);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.coloresRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Color with ID ${id} not found`);
    }
  }
}