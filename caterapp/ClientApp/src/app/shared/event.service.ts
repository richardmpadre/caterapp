import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    var newEvent : CalendarEvent = {
      title: eventForm.name,
      start: eventForm.startDate,
      end: eventForm.endDate
    };

    return this.http.post<CalendarEvent>('/api/event/create', newEvent, httpOptions);
  }

}
