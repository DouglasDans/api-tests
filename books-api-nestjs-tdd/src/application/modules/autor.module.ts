import { Module } from '@nestjs/common';
import AutorService from 'src/application/services/autor.service';
import AutorRepository from '../../core/interfaces/autor-repository.interface';
import { PrismaAutorRepository } from 'src/infra/db/repositories/autor.repository';
import { AutorController } from '../controllers/autor.controller';
import { DatabaseModule } from 'src/infra/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AutorController],
  providers: [
    AutorService,
    {
      provide: AutorRepository,
      useClass: PrismaAutorRepository,
    },
  ],
})
export class AutorModule {}
