import { Module } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { EditoraController } from './editora.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EditoraController],
  providers: [EditoraService, PrismaService],
})
export class EditoraModule {}
