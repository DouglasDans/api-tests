import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class AutorService {
  create(createAutorDto: CreateAutorDto) {
    return 'This action adds a new autor';
  }

  findAll() {
    console.log(prisma.livro.findMany());
    return prisma.livro.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
