import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get('/api/event/list');
  }

  saveEvent(eventForm: any): Observable<any> {
    var newEvent: Event = {
      id: eventForm.id,
      title: eventForm.title,
      start: eventForm.start,
      end: eventForm.end,
      typeId: eventForm.typeId
    };

    return this.http.post<Event>('/api/event/create', newEvent, httpOptions);
  }

  getEvent(id: number): Observable<any> {
    return this.http.get('/api/event/get/' + id);
  };

}
