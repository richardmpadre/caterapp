import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, AbstractControl } from '@angular/forms';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./event-new.component.html"
})

export class EventNewComponent implements OnInit {

  newEventForm: FormGroup;

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.newEventForm = new FormGroup({
      title: new FormControl('', [ Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required])
    })
  }

  get title() { return this.newEventForm.get('title'); }
  get start() { return this.newEventForm.get('start'); }


  onSubmit(form: NgForm) {
    this.eventService.saveEvent(form).subscribe(response => {
      this.router.navigate(['/events']);
    });    
  }

}
