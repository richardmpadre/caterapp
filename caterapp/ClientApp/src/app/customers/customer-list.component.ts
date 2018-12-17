import { Component, OnInit } from "@angular/core";
import { Customer } from "../models/customer";
import { CustomerService } from "../shared/customer.service";
import { MatDialog } from "@angular/material";
import { CustomerCreateComponent } from "./customer-create.component";

@Component({
  templateUrl: "./customer-list.component.html",
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit  {
  displayedColumns: string[] = ['name', 'contactNumber', 'altContactNumber', 'email', 'address']
  dataSource: Customer[];

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(response => {
      this.dataSource = response;
    });
  }

  new() {
    const dialogRef = this.dialog.open(CustomerCreateComponent, {
      width: '600px'
    });

  }
}
