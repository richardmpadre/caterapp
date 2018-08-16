import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: "./event-new.component.html"
})

export class EventNewComponent {
  newEventForm = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  })
  

  onSubmit() {
    console.log(this.newEventForm.value.name);
  }

}
