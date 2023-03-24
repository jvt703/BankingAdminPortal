import { TestBed } from '@angular/core/testing';

import { CreditCardTypeService } from './credit-card-type.service';

describe('CreditCardTypeService', () => {
  let service: CreditCardTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
