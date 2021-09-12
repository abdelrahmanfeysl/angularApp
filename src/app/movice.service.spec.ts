import { TestBed } from '@angular/core/testing';

import { MoviceService } from './movice.service';

describe('MoviceService', () => {
  let service: MoviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
