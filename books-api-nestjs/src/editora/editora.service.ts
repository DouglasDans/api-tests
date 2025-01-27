import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Editora } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EditoraService {
  constructor(private prisma: PrismaService) {}

  create(data: Editora) {
    return this.prisma.editora.create({
      data: data,
    });
  }

  async findAll(): Promise<Editora[]> {
    return this.prisma.editora.findMany();
  }

  findOne(id: number): Promise<Editora> {
    return this.prisma.editora
      .findFirstOrThrow({
        where: {
          id: id,
        },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Dados não foram encontrados no banco - ' + e,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      });
  }

  update(id: number, editora: Editora) {
    return this.prisma.editora
      .update({
        where: { id: id },
        data: editora,
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Dados não foram encontrados no banco - ' + e.meta.cause,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      });
  }

  remove(id: number) {
    return this.prisma.editora
      .delete({
        where: { id: id },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Dados não foram encontrados no banco - ' + e.meta.cause,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      });
  }
}
