import { TestBed } from '@angular/core/testing';

import { NgxMatSimpleAutocompleteService } from './ngx-mat-simple-autocomplete.service';

describe('NgxMatSimpleAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatSimpleAutocompleteService = TestBed.get(NgxMatSimpleAutocompleteService);
    expect(service).toBeTruthy();
  });
});
