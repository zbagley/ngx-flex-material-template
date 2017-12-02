import { TestBed, inject } from '@angular/core/testing';

import { ChartHttpService } from './chart-http.service';

describe('ChartHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartHttpService]
    });
  });

  it('should be created', inject([ChartHttpService], (service: ChartHttpService) => {
    expect(service).toBeTruthy();
  }));
});
