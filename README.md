<a href="https://www.npmjs.com/package/ngx-mat-simple-autocomplete" alt="License">
  <img src="https://img.shields.io/npm/l/ngx-mat-simple-autocomplete" />
</a>

<a href="https://www.npmjs.com/package/ngx-mat-simple-autocomplete?activeTab=versions" alt="Version">
  <img src="https://img.shields.io/npm/v/ngx-mat-simple-autocomplete" />
</a>

<a href="https://github.com/JoaoGuiPan/mat-simple-autocomplete/graphs/contributors" alt="Contributors">
  <img src="https://img.shields.io/github/contributors/JoaoGuiPan/mat-simple-autocomplete" />
</a>

# NgxMatSimpleAutocomplete

A simple Angular Material Input with autocomplete capabilities

# How to use

Simply import NgxMatSimpleAutocompleteModule into your AppModule and use <ngx-mat-simple-autocomplete></ngx-mat-simple-autocomplete>

# Settings and customization

    <ngx-mat-simple-autocomplete
      [inputLabel]="SomeLabelAndOrPlaceholder"
      [formCtrl]="someFormControl"
      [options]="someOptionsToFilterFrom"
      [settings]="settingsDetailedBelow"
      [disabled]="someBoolean"
      (inputValueChange)="someAsyncSearchCustomMethod($event)"
      (selectedValueChange)="someItemSelectedCustomMethod($event)"
     ></ngx-mat-simple-autocomplete>

The Settings object is: 

    {
      debounceTimeInMs: 400,
      maxOptionsSize: 9,
      optionLabel: (option: any) => {
        /* how to present the option label in the list */
      }
    }

# Future improvements

This is a very early stages project I made to help me in my work (where I need to constantly code autocompletes) and for me this configuration makes sense and is easy enough. In the future I plan to remove the Material dependency entirely and add more options to customize it.

Other suggestions please feel free to contribute at: https://github.com/JoaoGuiPan/mat-simple-autocomplete.

Thanks for downloading!
