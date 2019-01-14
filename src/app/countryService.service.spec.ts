/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryServiceService } from './countryService.service';

describe('Service: CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryServiceService]
    });
  });

  it('should ...', inject([CountryServiceService], (service: CountryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
