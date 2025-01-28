import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAutorDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  nome: string;

  @IsString()
  nacionalidade: string;

  @IsDateString()
  dataNascimento: Date;
}

export class UpdateAutorDto extends PartialType(CreateAutorDto) {}
