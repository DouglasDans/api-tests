import { Injectable } from '@nestjs/common';
import AutorRepository from '../../core/interfaces/autor-repository.interface';
import { CreateAutorDto, UpdateAutorDto } from 'src/core/dto/autor.dto';

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

  async getById(id: number) {
    try {
      return await this.autor.getById(id);
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, autorDto: UpdateAutorDto) {
    try {
      return await this.autor.update(id, autorDto);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: number) {
    try {
      return await this.autor.delete(id);
    } catch (error) {
      console.error(error);
    }
  }
}
