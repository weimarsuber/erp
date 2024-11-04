import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ColoresService } from './colores.service';
import { Color } from './colores.entity';

@Controller('colores')
export class ColoresController {
  constructor(private readonly coloresService: ColoresService) {}

  @Get()
  findAll(): Promise<Color[]> {
    return this.coloresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Color> {
    return this.coloresService.findOne(id);
  }

  @Post()
  create(@Body() color: Color): Promise<Color> {
    return this.coloresService.create(color);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() color: Color): Promise<Color> {
    return this.coloresService.update(id, color);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.coloresService.remove(id);
  }
}