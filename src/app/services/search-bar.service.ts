import { Injectable } from '@angular/core';
import {AppService} from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService extends AppService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getAll(): Observable<any> {
    const url = `http://10.90.146.223:8080/bff/airports`;
    return this.http.get(url);
  }

  destinations(origin_id: number): Observable<any> {
   const url = `http://10.90.146.223:8080/bff/sourceDestinations?source=${origin_id}`;
    return this.http.get(url);
  }

  sendDestinations(source_id: number, destination_id: number): Observable<any> {
    const url = `http://10.90.146.223:8080/bff/sourceDestinations?source=${source_id}&destination=${destination_id}`;
    return this.http.get(url);
  }
}
