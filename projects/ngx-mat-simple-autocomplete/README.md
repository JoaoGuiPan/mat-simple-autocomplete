# NgxMatSimpleAutocomplete

A simple Angular Material Input with autocomplete capabilities

# How to use

Simply import NgxMatSimpleAutocompleteModule into your AppModule and use <ngx-mat-simple-autocomplete></ngx-mat-simple-autocomplete>

# Settings and customization

    <ngx-mat-simple-autocomplete
      [inputLabel]="Some label/placeholder"
      [inputValue]="someStartingValue"
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
