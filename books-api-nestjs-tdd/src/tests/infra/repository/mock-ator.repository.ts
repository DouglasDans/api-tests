import { Injectable } from '@nestjs/common';
import AutorRepository from 'src/core/interfaces/autor-repository.interface';
import { vi } from 'vitest';

const mockAutorRepository = {
  create: vi.fn(),
  getAll: vi.fn(),
  getById: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
};

@Injectable()
export class MockAutorRepository implements AutorRepository {
  create = mockAutorRepository.create;
  getAll = mockAutorRepository.getAll;
  getById = mockAutorRepository.getById;
  update = mockAutorRepository.update;
  delete = mockAutorRepository.delete;
}
