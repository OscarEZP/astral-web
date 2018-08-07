import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() searchBarConfig: any;
  ngForm: FormGroup;
  dateInit: any;
  dateEnd: any;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.ngForm, 'formulario');
  }

  buildForm() {
    this.ngForm = this._fb.group({
      source: null,
      destination: null,
      date_init: null,
      date_end: null
    });
  }

  submit(form: any) {
    console.log(form, 'any');
  }
}
