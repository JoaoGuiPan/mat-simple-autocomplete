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
    this.optionLabel = optionLabel;
    this.debounceTimeInMs = debounceTimeInMs;
    this.maxOptionsSize = maxOptionsSize;
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

  @Input()
  inputValue = '';

  @Output()
  inputValueChange: EventEmitter<string> = new EventEmitter();

  @Input()
  selectedValue: any;

  @Output()
  selectedValueChange: EventEmitter<SelectedOption<any>> = new EventEmitter();

  filteredOptions = [];

  autoControl = new FormControl();

  private destroy$: Subject<void> = new Subject();

  constructor() {
  }

  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.autoControl.disable();
    } else {
      this.autoControl.enable();
    }
  }

  @Input()
  set options(options: any[]) {
    this.filteredOptions = options && options.slice(0, this.settings.maxOptionsSize);
  }

  ngOnInit() {
    this.autoControl.setValue(this.inputValue);
    this.autoControl.valueChanges
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
    this.autoControl.setValue(this.settings.optionLabel(selectedOption.option));
    this.selectedValue = selectedOption.option;
    this.selectedValueChange.emit(selectedOption);
  }
}

