import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { EventTypeService } from '../../shared/event-type.service';

@Component({
  templateUrl: './event-type-new.component.html',
})
export class EventTypeNewComponent {

  newEventTypeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EventTypeNewComponent>,
    public eventTypeService: EventTypeService
  ) { }

  ngOnInit(): void {
    this.newEventTypeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(form: NgForm) {
    this.eventTypeService.save(form).subscribe(response => {
      this.dialogRef.close();
    });
  }

}
