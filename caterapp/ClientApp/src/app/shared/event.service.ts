import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get('/api/event/list');
  }

  saveEvent(eventForm : any) {
    var newEvent : CalendarEvent = {
      title: eventForm.name,
      start: eventForm.startDate,
      end: eventForm.endDate
    };
    //this.events.push(newEvent);
  }

}
