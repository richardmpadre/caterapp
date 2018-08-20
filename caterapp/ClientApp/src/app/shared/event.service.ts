import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): CalendarEvent[] {
    return this.events;
  }

  saveEvent(eventForm : any) {
    var newEvent : CalendarEvent = {
      title: eventForm.name,
      start: eventForm.startDate,
      end: eventForm.endDate
    };
    this.events.push(newEvent);
  }

  events: CalendarEvent[] = [
    
  ];
}
