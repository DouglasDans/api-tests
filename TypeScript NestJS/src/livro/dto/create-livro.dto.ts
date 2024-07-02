import { PartialType } from '@nestjs/mapped-types';
import { Livro } from '@prisma/client';
import {
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateLivroDto {
  @IsString()
  isbn: string;

  @IsString()
  titulo: string;

  @IsString()
  assunto: string;

  @IsDateString()
  dataPublicacao: Date;

  @IsString()
  edicao: string;

  @IsNumber()
  autorId: number;

  @IsNumber()
  editoraId: number;
}
