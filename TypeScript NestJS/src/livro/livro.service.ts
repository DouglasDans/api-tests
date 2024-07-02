import { Injectable } from '@nestjs/common';
import { Livro } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LivroService {

  constructor(private prisma : PrismaService) {}

  create(createLivroDto: Livro) {
    return 'This action adds a new livro';
  }

  findAll() {
    return `This action returns all livro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, updateLivroDto: Livro) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}
