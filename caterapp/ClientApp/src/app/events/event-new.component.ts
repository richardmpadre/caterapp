import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./event-new.component.html"
})

export class EventNewComponent {

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  newEventForm = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  })
  

  onSubmit(form: NgForm) {
    this.eventService.saveEvent(form);
    this.router.navigate(['/events']);
  }

}
