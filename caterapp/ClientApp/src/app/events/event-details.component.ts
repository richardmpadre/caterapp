import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CalendarEvent } from 'calendar-utils';
import { EventType } from '../models/event-type';
import { EventTypeService } from '../shared/event-type.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id: number;
  eventForm: FormGroup;
  model: Event;
  eventTypes: EventType[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private eventTypeService : EventTypeService
  ) { }

  ngOnInit() {

    this.eventForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      typeId: new FormControl('', [Validators.required])
    })

    this.route.params.subscribe(params => {

      // + converts the string to number
      this.id = +params['id'];
      this.eventService.getEvent(this.id).subscribe(data => {
        data.start = new Date(data.start);
        data.end = new Date(data.end);
        this.model = data;
        this.eventForm.patchValue(this.model);
      });

      // populate event types
      this.eventTypeService.list().subscribe(data => {
        this.eventTypes = data;
      });

    });
  }

  get title() { return this.eventForm.get('title'); }
  get start() { return this.eventForm.get('start'); }
  get end() { return this.eventForm.get('end'); }
  get typeId() { return this.eventForm.get('typeId'); }

  onSubmit(form: NgForm) {
    this.eventService.saveEvent(form).subscribe(response => {
      this.router.navigate(['/events']);
    });
  }

}
