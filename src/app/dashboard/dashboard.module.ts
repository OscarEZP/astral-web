import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {SearchBarModule} from '../search-bar/search-bar.module';
import {ComponentsModule} from '../components/components.module';
import { HotTableModule } from '@handsontable/angular';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SearchBarModule,
    HotTableModule.forRoot(),
    ComponentsModule
  ],
  providers: [],
})
export class DashboardModule { }
