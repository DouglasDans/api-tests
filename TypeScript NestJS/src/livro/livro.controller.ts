import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Livro } from '@prisma/client';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Controller('api/livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Post()
  create(@Body() livro: CreateLivroDto) {
    return this.livroService.create(livro);
  }

  @Get()
  findAll() {
    return this.livroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() livro: UpdateLivroDto) {
    return this.livroService.update(+id, livro);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livroService.remove(+id);
  }
}
