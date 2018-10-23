import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventTypeDialogComponent } from './event-type-dialog.component';
import { EventTypeService } from '../../shared/event-type.service';
import { EventType } from '../../models/event-type';
import { EventTypeDeleteComponent } from './event-type-delete.component';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.css']
})
export class EventTypeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions']
  dataSource : EventType[];

  constructor(
    public dialog: MatDialog,
    public eventTypeService: EventTypeService
  ) { }

  getEventTypes() {
    this.eventTypeService.list().subscribe(response => {
      this.dataSource = response;
    });
  }

  openDialog(eventType: EventType): void {
    const dialogRef = this.dialog.open(EventTypeDialogComponent, {
      width: '400px',
      data: (eventType || { id: 0, name: '' })
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEventTypes();
    });
  }

  openDeleteDialog(eventType: EventType): void {
    const dialogRef = this.dialog.open(EventTypeDeleteComponent, {
      width: '400px',
      data: eventType
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEventTypes();
    });
  }

  ngOnInit() {
    this.getEventTypes();
  }

}
