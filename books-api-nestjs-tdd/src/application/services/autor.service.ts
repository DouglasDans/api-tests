import { Injectable } from '@nestjs/common';
import AutorRepository from '../../core/interfaces/autor-repository.interface';
import { CreateAutorDto } from 'src/core/dto/autor.dto';

@Injectable()
export default class AutorService {
  constructor(private autor: AutorRepository) {}

  async create(autorDto: CreateAutorDto) {
    try {
      if (autorDto.nome === null) {
        throw new Error('propriedade nome não foi informada');
      }
      return await this.autor.create(autorDto);
    } catch (error) {
      console.error(error);
    }
  }

  async getAll() {
    try {
      return await this.autor.getAll();
    } catch (error) {
      console.error(error);
    }
  }
}
