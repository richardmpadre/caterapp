import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  templateUrl: './customer-create.component.html',
})
export class CustomerCreateComponent {

  newEventTypeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerCreateComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: EventType,
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    
  }

}
