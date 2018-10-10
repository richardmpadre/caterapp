import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventTypeNewComponent } from './event-type-new.component';
import { EventTypeService } from '../../shared/event-type.service';
import { EventType } from '../../models/event-type';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.css']
})
export class EventTypeComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource : EventType[];

  constructor(
    public dialog: MatDialog,
    public eventTypeService: EventTypeService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EventTypeNewComponent, {
      width: '400px'
    });

  }

  ngOnInit() {
    this.eventTypeService.list().subscribe(response => {
      this.dataSource = response;
    });
  }

}
