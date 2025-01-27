import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { EditoraService } from './editora.service';
import { Editora } from '@prisma/client';

@Controller('api/editora')
export class EditoraController {
  constructor(private readonly editoraService: EditoraService) {}

  @Post()
  create(@Body() editora: Editora) {
    return this.editoraService.create(editora);
  }

  @Get()
  findAll() {
    return this.editoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.editoraService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() editora: Editora) {
    return this.editoraService.update(id, editora);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.editoraService.remove(id);
  }
}
