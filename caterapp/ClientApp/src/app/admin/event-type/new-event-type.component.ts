import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-event-type',
  templateUrl: './new-event-type.component.html',
})
export class NewEventTypeComponent {

  constructor(public dialogRef: MatDialogRef<NewEventTypeComponent>) { }

}
