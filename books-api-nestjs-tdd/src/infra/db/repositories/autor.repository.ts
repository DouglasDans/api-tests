import { Injectable } from '@nestjs/common';
import { Autor } from 'src/core/entities/autor.entity';
import AutorRepository from 'src/core/interfaces/autor.repository';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAutorDto } from 'src/application/dto/autor.dto';

@Injectable()
export class PrismaAutorRepository implements AutorRepository {
  constructor(private prisma: PrismaService) {}

  async create(autorDto: CreateAutorDto): Promise<Autor> {
    return await this.prisma.autor.create({
      data: {
        nome: autorDto.nome,
        dataNascimento: autorDto.dataNascimento,
        nacionalidade: autorDto.nacionalidade,
      },
    });
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
