import { Component } from '@angular/core';

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

  constructor() {
    this.filtered = this.filtered.concat(this.options);
  }

  search(event: string) {
    this.filtered = this.options.filter(value => value.indexOf(event) >= 0);
  }
}
