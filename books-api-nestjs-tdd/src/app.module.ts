import { Module } from '@nestjs/common';
import { AutorModule } from './application/modules/autor.module';
import { DatabaseModule } from './infra/db/database.module';

@Module({
  imports: [DatabaseModule, AutorModule],
})
export class AppModule {}
