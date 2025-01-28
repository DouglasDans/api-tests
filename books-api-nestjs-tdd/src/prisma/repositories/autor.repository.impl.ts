import { Injectable } from '@nestjs/common';
import { Autor } from 'src/models/entities/autor.entity';
import AutorRepository from 'src/models/repositories/autor.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAutorRepository implements AutorRepository {
  constructor(private prisma: PrismaService) {}

  create(): Promise<Autor> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Autor[]> {
    throw new Error('Method not implemented.');
  }

  getById(id: number): Promise<Autor> {
    throw new Error('Method not implemented.');
  }

  update(id: number): Promise<Autor> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<Autor> {
    throw new Error('Method not implemented.');
  }
}
