import { TestBed } from '@angular/core/testing';

import { PresentationComponentsService } from './presentation-components.service';

describe('PresentationComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentationComponentsService = TestBed.get(PresentationComponentsService);
    expect(service).toBeTruthy();
  });
});
