import { IsDateString, IsString } from 'class-validator'

export class CreateAutorDto{

   @IsString()
   nome: string

   @IsString()
   nacionalidade: string

   @IsDateString()
   dataNascimento: Date
}
