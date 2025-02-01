import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateEditoraDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  nome: string;

  @IsString()
  cnpj: string;

  @IsString()
  pais: string;
}

export class UpdateEditoraDto extends PartialType(CreateEditoraDto) {}
