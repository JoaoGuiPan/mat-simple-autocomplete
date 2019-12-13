import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'projects/ngx-mat-simple-autocomplete/src/config/material.module';
import { NgxMatSimpleAutocompleteComponent } from './ngx-mat-simple-autocomplete.component';



@NgModule({
  declarations: [NgxMatSimpleAutocompleteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgxMatSimpleAutocompleteComponent]
})
export class NgxMatSimpleAutocompleteModule { }
