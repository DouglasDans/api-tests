import { Injectable } from '@nestjs/common';
import LivroRepository from 'src/models/repositories/livro.repository';
import { PrismaService } from '../prisma.service';
import { Livro } from 'src/models/entities/livro.entity';

@Injectable()
export class PrismaLivroRepository implements LivroRepository {
  constructor(private prisma: PrismaService) {}

  create(): Promise<Livro> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Livro[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Livro> {
    throw new Error('Method not implemented.');
  }
  update(id: number): Promise<Livro> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<Livro> {
    throw new Error('Method not implemented.');
  }
}
