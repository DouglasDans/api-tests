import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AutorController],
  providers: [AutorService, PrismaService],
})
export class AutorModule {}
