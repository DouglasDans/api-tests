import { Injectable } from '@nestjs/common';
import { Autor } from 'src/core/entities/autor.entity';
import AutorRepository from 'src/core/interfaces/autor-repository.interface';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAutorDto, UpdateAutorDto } from 'src/core/dto/autor.dto';

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

  async getAll(): Promise<Autor[]> {
    return await this.prisma.autor.findMany();
  }

  async getById(id: number): Promise<Autor | null> {
    return await this.prisma.autor.findFirst({ where: { id } });
  }

  async update(id: number, autorDto: UpdateAutorDto): Promise<Autor> {
    return await this.prisma.autor.update({ where: { id }, data: autorDto });
  }

  async delete(id: number): Promise<Autor> {
    return await this.prisma.autor.delete({ where: { id } });
  }
}
