import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { Customer } from '../models/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Customer[] {
    return [
      { id: 1, name: 'Richard Padre', contactNumber: '09175735383', altContactNumber: 'n/a', email: 'richardmpadre@gmail.com', address: 'Guinobatan, Albay' },
      { id: 1, name: 'Paula Flores', contactNumber: '09175735383', altContactNumber: 'n/a', email: 'richardmpadre@gmail.com', address: 'Guinobatan, Albay' }
    ];
  }

}
