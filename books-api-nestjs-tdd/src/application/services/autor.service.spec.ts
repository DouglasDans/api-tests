import { expect, it, describe, vi, beforeEach } from 'vitest';
import AutorService from './autor.service';
import { Test } from '@nestjs/testing';
import AutorRepository from 'src/core/interfaces/autor-repository.interface';
import { MockAutorRepository } from 'src/tests/infra/repository/mock-ator.repository';

let autorService: AutorService;

beforeEach(async () => {
  vi.clearAllMocks();

  const module = await Test.createTestingModule({
    providers: [
      AutorService,
      { provide: AutorRepository, useClass: MockAutorRepository },
    ],
  }).compile();

  autorService = module.get<AutorService>(AutorService);
});

describe('create()', () => {
  it('cria novo autor com sucesso', async () => {
    const autorDto = {
      nome: 'Fulano',
      dataNascimento: '01-05-2021',
      nacionalidade: 'Brasil',
    };

    const result = await autorService.create(autorDto);

    expect(result).toEqual({ id: 1, ...autorDto });
  });

  // it('cria novo autor com sucesso', () => {
  //   const autorDto = {};
  //   expect(AutorService.cr);
  // });
});
