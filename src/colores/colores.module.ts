import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './colores.entity';
import { ColoresController } from './colores.controller';
import { ColoresService } from './colores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Color])],
  controllers: [ColoresController],
  providers: [ColoresService],
})
export class ColoresModule {}