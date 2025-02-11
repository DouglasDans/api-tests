import { Controller, Get, Post } from '@nestjs/common';
import { CreateAutorDto } from '../dto/autor.dto';
import AutorService from 'src/core/services/autor.service';

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
}
