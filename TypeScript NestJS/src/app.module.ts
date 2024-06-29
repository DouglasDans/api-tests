import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [AutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
