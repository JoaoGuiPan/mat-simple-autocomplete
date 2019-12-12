import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatSimpleAutocompleteComponent } from './ngx-mat-simple-autocomplete.component';

describe('NgxMatSimpleAutocompleteComponent', () => {
  let component: NgxMatSimpleAutocompleteComponent;
  let fixture: ComponentFixture<NgxMatSimpleAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatSimpleAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatSimpleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
