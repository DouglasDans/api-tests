import { IsString } from 'class-validator';

export class CreateEditoraDto {
  @IsString()
  nome: string;

  @IsString()
  cnpj: string;

  @IsString()
  pais: string;
}
