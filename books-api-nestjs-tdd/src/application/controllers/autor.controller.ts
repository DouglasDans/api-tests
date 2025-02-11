import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAutorDto, UpdateAutorDto } from '../../core/dto/autor.dto';
import AutorService from 'src/application/services/autor.service';

@Controller('api/autor')
export class AutorController {
  constructor(private autorService: AutorService) {}

  @Post()
  async create(autorDto: CreateAutorDto) {
    await this.autorService.create(autorDto);
  }

  @Get()
  async getAll() {
    return await this.autorService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.autorService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() autorDto: UpdateAutorDto) {
    return this.autorService.update(+id, autorDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.autorService.delete(+id);
  }
}
