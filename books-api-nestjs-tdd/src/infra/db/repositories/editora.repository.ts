import { Injectable } from '@nestjs/common';
import EditoraRepository from 'src/core/interfaces/editora-repository.interface';
import { PrismaService } from '../prisma/prisma.service';
import { Editora } from 'src/core/entities/editora.entity';

@Injectable()
export class PrismaEditoraRepository implements EditoraRepository {
  constructor(private prisma: PrismaService) {}
  create(): Promise<Editora> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Editora[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Editora> {
    throw new Error('Method not implemented.');
  }
  update(id: number): Promise<Editora> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<Editora> {
    throw new Error('Method not implemented.');
  }
}
