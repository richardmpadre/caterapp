import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  templateUrl: "./event-new.component.html"
})

export class EventNewComponent {
  newEventForm = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  })
  

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
