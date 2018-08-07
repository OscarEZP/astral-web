import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() form: FormGroup;
  @ViewChild('ds') datePicker: ElementRef;
  public customClass = 'animated fadeIn delay-2';
  public value: any;
  onChange: any = () => { };
  onTouched: any = () => { };
  constructor(private _fb: FormBuilder) {
    }

  ngOnInit() {
    console.log(this.form, 'formulario');
    console.log(this.value, 'valor');
    setTimeout(() => {
      // this.datePicker.nativeElement.className = 'animated fadeIn';
      console.log(this.datePicker, 'datepicker');
    }, 1000);
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }
}
