import { TestBed } from '@angular/core/testing';

import { ColectiiService } from './colectii.service';

describe('ColectiiService', () => {
  let service: ColectiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColectiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
