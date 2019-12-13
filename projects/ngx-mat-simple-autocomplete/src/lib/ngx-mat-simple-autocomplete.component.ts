import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material';

const DEFAULT_DEBOUNCE_TIME_IN_MS = 400;
const DEFAULT_MAX_OPTIONS_SIZE = 9;

export interface SelectedOption<T> {
  option: T;
  index: number;
}

export class Settings {

  static DEFAULT_DEBOUNCE_TIME_IN_MS = DEFAULT_DEBOUNCE_TIME_IN_MS;

  static DEFAULT_MAX_OPTIONS_SIZE = DEFAULT_MAX_OPTIONS_SIZE;

  debounceTimeInMs = DEFAULT_DEBOUNCE_TIME_IN_MS;
  maxOptionsSize = DEFAULT_MAX_OPTIONS_SIZE;

  constructor(optionLabel?: any,
              debounceTimeInMs?: number,
              maxOptionsSize?: number) {
    if (optionLabel) {
      this.optionLabel = optionLabel;
    }
    if (debounceTimeInMs) {
      this.debounceTimeInMs = debounceTimeInMs;
    }
    if (maxOptionsSize) {
      this.maxOptionsSize = maxOptionsSize;
    }
  }

  optionLabel(option: any): string {
    return option;
  }
}

@Component({
  selector: 'ngx-mat-simple-autocomplete',
  templateUrl: './ngx-mat-simple-autocomplete.html',
  styles: []
})
export class NgxMatSimpleAutocompleteComponent implements OnInit {

  @Input()
  settings = new Settings();

  @Input()
  inputLabel = '';

  @Output()
  inputValueChange: EventEmitter<string> = new EventEmitter();

  @Input()
  selectedValue: any;

  @Input()
  formCtrl = new FormControl();

  @Output()
  selectedValueChange: EventEmitter<SelectedOption<any>> = new EventEmitter();

  filteredOptions = [];

  private destroy$: Subject<void> = new Subject();

  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.formCtrl.disable();
    } else {
      this.formCtrl.enable();
    }
  }

  @Input()
  set options(options: any[]) {
    this.filteredOptions = options && options.slice(0, this.settings.maxOptionsSize);
  }

  ngOnInit() {
    this.formCtrl.valueChanges
      .pipe(
        debounceTime(this.settings.debounceTimeInMs),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        this.inputValueChange.emit(value);
      });
  }

  selectOption(event: MatAutocompleteSelectedEvent) {
    const selectedOption: SelectedOption<any> = event.option.value;
    this.formCtrl.setValue(this.settings.optionLabel(selectedOption.option));
    this.selectedValue = selectedOption.option;
    this.selectedValueChange.emit(selectedOption);
  }
}

