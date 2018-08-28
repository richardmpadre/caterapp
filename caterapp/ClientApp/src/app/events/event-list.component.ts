import { Component, OnInit } from "@angular/core";
import { startOfDay, addDays, subDays, endOfMonth, addHours, isSameMonth, isSameDay } from 'date-fns';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { EventService } from "../shared/event.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./event-list.component.html"
})

export class EventListComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = false;
  events: CalendarEvent[];

  constructor(
    private eventService: EventService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {

      // convert ISO dates to JS dates
      data.map(e => {
        e.start = new Date(e.start);
        e.end = new Date(e.end);
      });

      this.events = data;
    });
  }

  // Handler when one the dates are clicked
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  // Handler when an event is clicked
  handleEvent(action: string, event: CalendarEvent): void {
    this.router.navigate(['/events/details', event.id]);
  }
}
