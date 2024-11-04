import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColoresModule } from './colores/colores.module';
import { TallasModule } from './tallas/tallas.module';
import { ItemsGruposModule } from './items-grupos/items-grupos.module';
import { MediosPagoModule } from './medios-pago/medios-pago.module';
import { DocumentosModule } from './documentos/documentos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'inventory',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ColoresModule,
    TallasModule,
    ItemsGruposModule,
    MediosPagoModule,
    DocumentosModule,
  ],
})
export class AppModule {}