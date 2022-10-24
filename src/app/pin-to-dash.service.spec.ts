import { TestBed } from '@angular/core/testing';

import { PinToDashService } from './pin-to-dash.service';

describe('PinToDashService', () => {
  let service: PinToDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinToDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
