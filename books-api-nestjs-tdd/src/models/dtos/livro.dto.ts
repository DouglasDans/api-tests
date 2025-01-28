import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateLivroDto {
  @IsOptional()
  @IsInt()
  id: number;

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

  @IsInt()
  autorId: number;

  @IsInt()
  editoraId: number;
}

export class UpdateLivroDto extends PartialType(CreateLivroDto) {}
