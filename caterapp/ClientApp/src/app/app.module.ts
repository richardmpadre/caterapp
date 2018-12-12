import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventNewComponent } from './events/event-new.component';
import { UiModule } from './ui/ui.module';
import { EventDetailsComponent } from './events/event-details.component';
import { EventTypeComponent } from './admin/event-type/event-type.component';
import { EventTypeDialogComponent } from './admin/event-type/event-type-dialog.component';
import { EventTypeDeleteComponent } from './admin/event-type/event-type-delete.component';

// customer imports
import { CustomerListComponent } from './customers/index';

// services import
import {
  EventService,
  EventTypeService,
  CustomerService
} from './shared/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    BrowserAnimationsModule,

    HttpClientModule,

    CalendarModule.forRoot(),
    FlatpickrModule.forRoot(),

    // angular material imports
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,

    // Import toastr
    ToastrModule.forRoot({
      timeOut: 100000,
      positionClass: 'toast-bottom-left'
    })
  ],
  providers: [
    EventService,
    EventTypeService,
    CustomerService
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventNewComponent,
    EventDetailsComponent,
    EventTypeDialogComponent,
    EventTypeComponent,
    EventTypeDeleteComponent,
    CustomerListComponent,
  ],
  entryComponents: [
    EventTypeDialogComponent,
    EventTypeDeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
