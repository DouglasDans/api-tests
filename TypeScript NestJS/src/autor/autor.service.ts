import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Autor } from '@prisma/client'
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AutorService {

  constructor(private prisma: PrismaService) {}

  create( data: Autor) {
    return this.prisma.autor.create({
      data: data
    })
  }

  async findAll() : Promise<Autor[]>{
    return this.prisma.autor.findMany();
  }

  findOne(id: number) : Promise<Autor> {    
    return this.prisma.autor.findFirstOrThrow({
      where: {
        id: id
      }
    }).catch(e => {
      throw new HttpException({
        message: "Dados não foram encontrados no banco - " + e,
        statusCode: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND)
    });
  }

  update(id: number, autor: Autor)  {
    return this.prisma.autor.update({
      where: {id : id},
      data: autor
    }).catch(e => {
      throw new HttpException({
        message: "Dados não foram encontrados no banco - " + e.meta.cause,
        statusCode: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND)
    })
  }

  remove(id: number) {
    return this.prisma.autor.delete({
      where: { id: id }
    }).catch(e => {
      throw new HttpException({
        message: "Dados não foram encontrados no banco - " + e.meta.cause,
        statusCode: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND)
    })
  }
}
