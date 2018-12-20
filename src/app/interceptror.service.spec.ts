import { TestBed } from '@angular/core/testing';

import { InterceptrorService } from './interceptror.service';

describe('InterceptrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptrorService = TestBed.get(InterceptrorService);
    expect(service).toBeTruthy();
  });
});
