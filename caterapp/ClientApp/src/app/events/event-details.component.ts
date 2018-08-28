import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id: number;
  eventForm: FormGroup;
  model: CalendarEvent;

  constructor(
    private route: ActivatedRoute,
    private eventService : EventService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.eventForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        start: new FormControl('', [Validators.required]),
        end: new FormControl('', [Validators.required])
      })

      // + converts the string to number
      this.id = +params['id'];
      this.eventService.getEvent(this.id).subscribe(data => {

        data.start = new Date(data.start);
        data.end = new Date(data.end);

        this.model = data;
        this.eventForm.patchValue(this.model);
      });
    });

  }

}
