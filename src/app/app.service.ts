import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable()
export class AppService {
  constructor(public http: HttpClient) {
  }

  public get(url): Observable<any> {
    return this.http.get(url, httpOptions);
  }

}
