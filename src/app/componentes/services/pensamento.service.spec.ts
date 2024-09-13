import { TestBed } from '@angular/core/testing';

import { PensamentoService } from '../services/pensamento.service';

describe('PensamentoService', () => {
  let service: PensamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
