import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

   settings = {
    columns: {
      name: {
        title: 'Full Name'
      },
      gender: {
        title: 'Gender'
      },
      eye_color: {
        title: 'Eye color'
      }
    }
  };

  getData(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people/');
  }
}
