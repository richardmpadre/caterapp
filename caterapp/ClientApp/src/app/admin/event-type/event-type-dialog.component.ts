import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { EventTypeService } from '../../shared/event-type.service';
import { EventType } from '../../models/event-type';

@Component({
  templateUrl: './event-type-dialog.component.html',
})
export class EventTypeDialogComponent {

  newEventTypeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EventTypeDialogComponent>,
    public eventTypeService: EventTypeService,
    @Inject(MAT_DIALOG_DATA) public data: EventType,
  ) {}

  ngOnInit(): void {
    this.newEventTypeForm = new FormGroup({
      id: new FormControl(this.data.id, null),
      name: new FormControl(this.data.name, [Validators.required])
    })
  }

  onSubmit(form: NgForm) {
    this.eventTypeService.save(form).subscribe(response => {
      this.dialogRef.close();
    });
  }

}
