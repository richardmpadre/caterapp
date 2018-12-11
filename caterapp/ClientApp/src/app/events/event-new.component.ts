import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, AbstractControl } from '@angular/forms';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';
import { EventTypeService } from '../shared/event-type.service';
import { EventType } from '../models/event-type';
import { ToastrService } from 'ngx-toastr';

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
  templateUrl: "./event-new.component.html",
  styleUrls: ["./event-new.component.css"]
})

export class EventNewComponent implements OnInit {

  eventTypes: EventType[];
  newEventForm: FormGroup;

  constructor(
    private eventService: EventService,
    private router: Router,
    private eventTypeService: EventTypeService,
    private toastrService : ToastrService
  ) {}
  
  ngOnInit(): void {
    this.newEventForm = new FormGroup({
      title: new FormControl('', [ Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      typeId: new FormControl('', [Validators.required])
    })

    var initStartDate = new Date();
    var initEndDate = new Date();
    initStartDate.setHours(8, 0, 0, 0);
    initEndDate.setHours(17, 0, 0, 0);
    this.newEventForm.patchValue({ start: initStartDate, end: initEndDate });

    this.eventTypeService.list().subscribe(data => {
      this.eventTypes = data;
    });

  }

  get title() { return this.newEventForm.get('title'); }
  get start() { return this.newEventForm.get('start'); }
  get end() { return this.newEventForm.get('end'); }
  get typeId() { return this.newEventForm.get('typeId'); }


  onSubmit(form: NgForm) {
    this.eventService.saveEvent(form).subscribe(response => {
      this.router.navigate(['/events/details/' + response.id]);
      this.toastrService.success("New event created");
    });
  }

  startDateChanged(newDate: Date) {
    var endDate = new Date(newDate);
    endDate.setHours(17, 0, 0, 0);
    // workaround: Angular currently has a bug where reactive forms does not automatically update when
    // the control is updated from component
    // https://github.com/angular/angular/issues/13792
    this.newEventForm.patchValue({ end: endDate});
  }

}
