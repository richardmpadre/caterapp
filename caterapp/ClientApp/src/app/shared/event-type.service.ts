import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventType } from '../models/event-type';

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
    if(eventForm.id)
      return this.http.post('/api/event-type/update', eventForm, httpOptions);
    else
      return this.http.post('/api/event-type/create', eventForm, httpOptions);
  }

  list(): Observable<EventType[]> {
    return this.http.get<EventType[]>('/api/event-type');
  }

}
