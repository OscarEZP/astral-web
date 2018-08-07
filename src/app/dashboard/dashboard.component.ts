import { Component, OnInit } from '@angular/core';
import { HotTableRegisterer } from '@handsontable/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: any;
  public data: any[] = [];
  columns: any[] = [];
  constructor(private _hot: HotTableRegisterer) { }

  ngOnInit() {
    this.columns.push({
      data: 'holacocacola',
      title: 'holacocacola'
    }, {
      data: 'color',
      title: 'color',
      type: 'autocomplete',
      source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white'],
    });
    this.data.push({
      'holacocacola': 'holacocacola',
      'color': 'color'
    },
    {
      'holacocacola': 'holacocacola',
      'color': 'color'
    });
    this.config = {
      components: {
        date_origin: {
          show: true,
          title: 'Fecha de vuelo inicio',
          placeholder: 'Seleccione fecha de inicio'
        },
        date_destination: {
          show: true,
          title: 'Fecha de vuelo final',
          placeholder: 'Seleccione fecha fin'
        },
        source_destination: {
          show: true,
          title_source: 'Origen',
          title_destination: 'Destino',
          placeholder_source: 'Ciudad o Aeropuerto',
          placeholder_destination: 'Ciudad o Aeropuerto'
        },
      }
    };
  }

  sendData() {
    console.log(this.data, 'dataholacoaccola');
  }

}
