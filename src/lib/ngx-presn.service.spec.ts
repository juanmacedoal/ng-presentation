import { TestBed } from '@angular/core/testing';

import { NgxPresnService } from './ngx-presn.service';

describe('NgxPresnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPresnService = TestBed.get(NgxPresnService);
    expect(service).toBeTruthy();
  });
});
