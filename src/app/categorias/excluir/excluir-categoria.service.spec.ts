import { TestBed } from '@angular/core/testing';

import { ExcluirCategoriaService } from './excluir-categoria.service';

describe('ExcluirCategoriaService', () => {
  let service: ExcluirCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcluirCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});