import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mat-sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MatSimpleAutocomplete';

  options = [
    'joselito',
    'mario',
    'paulo',
    'bruno',
    'valdemar',
    'eduardo',
  ];

  filtered = [];

  autoControl = new FormControl();

  constructor() {
    this.filtered = this.filtered.concat(this.options);
    this.autoControl.setValue('oswaldo');
  }

  search(event: string) {
    this.filtered = this.options.filter(value => value.indexOf(event) >= 0);
  }
}
