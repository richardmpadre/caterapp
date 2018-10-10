import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {

  constructor(private http: HttpClient) { }

  save(eventForm: any): Observable<any> {
    console.log('called');
    return this.http.post('/api/event-type/create', eventForm, httpOptions);
  }

}
