import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Livro } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Injectable()
export class LivroService {

  constructor(private prisma : PrismaService) {}

  create(livro: CreateLivroDto) {
    console.log(livro);
    return this.prisma.livro.create({
      data: livro,
    });
  }

  findAll() : Promise<Livro[]> {
    return this.prisma.livro.findMany()
  }

  findOne(id: number) {
    return this.prisma.livro.findFirstOrThrow({
      where: {id: id}
    }).catch(e => {
      throw new HttpException({
        message: "Dados não foram encontrados no banco - " + e,
        statusCode: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND)
    })
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return this.prisma.livro.update({
      where: {id: id},
      data: updateLivroDto
    }).catch(e => {
      throw new HttpException({
        message: "Dados não foram encontrados no banco - " + e.meta.cause,
        statusCode: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND)
    })
  }

  remove(id: number) {
    return this.prisma.livro.delete({
      where: {id: id}
    }).catch(e => {
      throw new HttpException({
        message: "Dados não foram encontrados no banco - " + e.meta.cause,
        statusCode: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND)
    })
  }
}
