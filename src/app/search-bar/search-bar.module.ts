import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import {SearchBarOdComponent} from './search-bar-od/search-bar-od.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {ReactiveFormsModule} from '@angular/forms';

import {SearchBarService} from '../services/search-bar.service';

import { AlertModule } from 'ngx-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { StrategyTypeComponent } from './strategy-type/strategy-type.component';
import { defineLocale } from 'ngx-bootstrap';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchBarOdComponent,
    DatepickerComponent,
    StrategyTypeComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent,
  ],
  providers: [SearchBarService],
})
export class SearchBarModule { }
