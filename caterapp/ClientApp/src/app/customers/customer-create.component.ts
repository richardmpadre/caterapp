import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Customer } from '../models/customer';
import { CustomerService } from '../shared';

@Component({
  templateUrl: './customer-create.component.html',
  styleUrls: ['customer-create.component.css']
})
export class CustomerCreateComponent {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id, null),
      name: new FormControl(this.data.name, [Validators.required]),
      contactNumber: new FormControl(this.data.contactNumber, [Validators.required]),
      altContactNumber: new FormControl(this.data.altContactNumber, [Validators.required]),
      email: new FormControl(this.data.email, null),
      address: new FormControl(this.data.address, null),
    })

  }

  onSubmit(form: NgForm) {
    this.customerService.save(form);
  }

}
