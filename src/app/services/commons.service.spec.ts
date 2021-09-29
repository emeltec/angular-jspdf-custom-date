/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonsService } from './commons.service';

describe('Service: Commons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonsService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('should ...', inject([CommonsService], (service: CommonsService) => {
    expect(service).toBeTruthy();
  }));

  it('Llamar a getValue', inject([CommonsService], (service: CommonsService) => {
    //spyOn(service,'getData').and.returnValue('')
    service.data$.next('124')
    service.getData
    expect(service.getData).toEqual('124')
  }));
});
