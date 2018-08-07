import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SearchBarService} from '../../services/search-bar.service';

@Component({
  selector: 'app-search-bar-od',
  templateUrl: './search-bar-od.component.html',
  styleUrls: ['./search-bar-od.component.scss']
})
export class SearchBarOdComponent implements OnInit {

  ngForm: FormGroup;
  airports: any;
  filter: any[] = [];
  destinationOrigins: any[] = [];
  filterDestinations: any[] = [];
  result: any[] = [];
  constructor(private fb: FormBuilder, private _searchBarService: SearchBarService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getData();
  }

  filterAirports(value: string) {
    console.log(value, this.airports, 'aeropuertos  ');
    if (value.length && value.length >= 2) {
      this.filter = this.airports.filter((f) => {
        return JSON.stringify(f).toLowerCase().includes(value.toLowerCase());
      });
      this.filter = this.filter.slice(0, 4);
    } else {
      this.filter = [];
      this.destinationOrigins = [];
    }
    console.log(this.filter, 'filtro holacocacola');
  }

  selectedItem(item: any) {
    this.filter = [];
    this.ngForm.controls['source'].setValue(item.code);
    this.ngForm.controls['source_id'].setValue(item.id);
    this.getDestinations(item.id);
  }

  getDestinations(origin_id: number) {
    this._searchBarService.destinations(origin_id)
      .subscribe((response) => {
        console.log(response);
        response.forEach((r) => {
          const destination = this.airports.find(f => +f.id === +r.destination);
          if (destination) {
            this.destinationOrigins.push(destination);
          }
        });
        console.log(this.destinationOrigins);
      }, error => {
        console.log(error);
      });
  }

  selectedItemDestination(item: any) {
    this.filterDestinations = [];
    this.ngForm.controls['destination_id'].setValue(item.id);
    this.ngForm.controls['destination'].setValue(item.code);
  }

  filterAirportsDestinations(value: string) {
    if (value.length && value.length >= 2) {
      this.filterDestinations = this.destinationOrigins.filter((f) => {
        return JSON.stringify(f).toLowerCase().includes(value);
      });
      this.filterDestinations = this.filterDestinations.slice(0, 4);
    } else {
      this.filterDestinations = [];
    }
  }

  getData() {
    this._searchBarService.getAll()
      .subscribe((response) => {
        this.airports = response;
      }, error => {
        console.log(error);
      });
  }

  buildForm() {
    this.ngForm = this.fb.group({
      strategy_type: [null, Validators.compose([Validators.required]) ],
      source_id: null,
      source: [null, Validators.compose([Validators.required]) ],
      destination_id: [null, Validators.compose([Validators.required]) ],
      destination: [null, Validators.compose([Validators.required]) ],
      strategy: [null, Validators.compose([Validators.required]) ],
    });
  }

  onSubmit(form: any) {
    this._searchBarService.sendDestinations(form.source_id, form.destination_id)
      .subscribe((response) => {
        this.result = response;
      }, error => {
        console.log(error);
      });
  }

}
